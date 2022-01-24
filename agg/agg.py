import argparse
from multiprocessing.sharedctypes import Value
import os
import math
import csv

import pandas as pd

class Main:
    def __init__(self, args):
        self.args = args

    def get_task_ids(self):
        result = []
        files = os.listdir(self.args.task)
        for f in files:
            if f.endswith(".csv"):
                result.append(f[:-4])

        return result

    def get_prolific_to_task(self):
        result = {}
        with open("Shachar+Ruppin+Thesis_January+10,+2022_17.28.csv", "r") as f:
            reader = csv.DictReader(f)
            next(reader)
            next(reader)
            for line in reader:
                if line["Q1"] == "":
                    continue

                result[line["Q1"]] = line["colortaskUID"]
                #result[line["colortaskUID"]] = line["Q1"]

        return result

    def aggregate2(self, prolific_to_task):
        with open("aggregated.csv", "w") as dest:
            writer = csv.DictWriter(dest, fieldnames=["prolific_id", "task_id"])
            writer.writeheader()
            for prolific_id, task_id in prolific_to_task.items():
                with open("records/{}.csv".format(task_id), "r") as src:
                    reader = csv.DictReader(src)
                    for line in reader:
                        pass

                    writer.writerow({
                        "prolific_id": prolific_id,
                        "task_id": task_id,
                    })

    def get_true_hint_phase_7_8(self, df):
        return df[(df["phaseIndex"].isin([7, 8])) & (df["didGiveHint"] == True)]

    def aggregate(self, prolific_to_task):
        with open("aggregated.csv", "w") as dest:
            writer = csv.DictWriter(dest, fieldnames=[
                "prolific_id",
                "task_id",
                "is_experimental",
                "total_proxy_usage_7-8",
                "poor_proxy_usage_7-8",
                "good_proxy_usage_7-8",
                "performance_1",
                "performance_2",
                "performance_3",
                "performance_4",
                "performance_5",
                "performance_6",
                "performance_7",
                "performance_8",
                "performance_practice_1-4",
                "performance_manipulation_5-6",
                "performance_voluntary_7-8",
                "performance_overall",
                "presses_mean",
                "presses_mean_7-8",
                "time_ms_mean",
                "time_ms_mean_7-8",
                "hint_followed_percentage",
                # Prolific
                "status",
                "age",
                "prolific_score",
                "entered_code",
                "employment_status",
                "sex",
                "student_status",
                # Qualtrics
                "anxiety",
                "depression",
                "OCI-R_sum",
                "SPISI_sum",
                "entry_test",
                "step_counting",
                "difficulty",
                "comments",
            ])
            writer.writeheader()
            for prolific_id, task_id in prolific_to_task.items():
                writer.writerow(self.get_row(prolific_id, task_id))

    def _task_values(self, task_id):
        with open("{}/{}.csv".format(self.args.task, task_id), "r") as src:
            df = pd.read_csv(src)
        
        true_hint_phase_7_8_ = self.get_true_hint_phase_7_8(df)
        df_hints_given = df[df["didGiveHint"] == True]
        return {
            "task_id": task_id,
            "is_experimental": df["isExperimental"][0],
            "total_proxy_usage_7-8": true_hint_phase_7_8_["didGiveHint"].count(),
            "poor_proxy_usage_7-8": true_hint_phase_7_8_[df["hintGroupSize"] == 5]["didGiveHint"].count(),
            "good_proxy_usage_7-8": true_hint_phase_7_8_[df["hintGroupSize"] == 107]["didGiveHint"].count(),
            "performance_1": self.phase_performance(df, [1]),
            "performance_2": self.phase_performance(df, [2]),
            "performance_3": self.phase_performance(df, [3]),
            "performance_4": self.phase_performance(df, [4]),
            "performance_5": self.phase_performance(df, [5]),
            "performance_6": self.phase_performance(df, [6]),
            "performance_7": self.phase_performance(df, [7]),
            "performance_8": self.phase_performance(df, [8]),
            "performance_practice_1-4": self.phase_performance(df, list(range(1, 5))),
            "performance_manipulation_5-6": self.phase_performance(df, list(range(5, 7))),
            "performance_voluntary_7-8": self.phase_performance(df, list(range(7, 9))),
            "performance_overall": self.phase_performance(df, list(range(1, 9))),
            "presses_mean": df["keyPresses"].mean(),
            "presses_mean_7-8": df[df["phaseIndex"].isin([7, 8])]["keyPresses"].mean(),
            "time_ms_mean": df[df["trialTimeMs"].notnull()]["trialTimeMs"].mean(),
            "time_ms_mean_7-8": df[df["trialTimeMs"].notnull()]["trialTimeMs"].mean(),
            "hint_followed_percentage": 100 * df_hints_given[df_hints_given["didFollowHint"] == True]["didFollowHint"].count() / df_hints_given["didFollowHint"].count()
                if not df_hints_given.empty else 0,
        }

    def _qualtrics_values(self, task_id):
        with open("{}".format(self.args.qual), "r") as src:
            df = pd.read_csv(src)

        df = df.drop([0, 1])[df["colortaskUID"] == task_id]
        if df.empty:
            return {
            }

        return {
            "anxiety": sum([int(df["DASSQ13#1_{}".format(i)].values[0]) for i in [1, 3, 5, 6, 9, 12, 13]]),
            "depression": sum([int(df["DASSQ13#1_{}".format(i)].values[0]) for i in [2, 4, 7, 8, 10, 11, 14]]),
            "OCI-R_sum": sum([int(df["OCI-R_{}".format(i)].values[0]) for i in range(1, 19)]),
            "SPISI_sum": sum([int(df["SPISI_{}".format(i)].values[0]) for i in range(1, 16)]),
            "entry_test": df["Q15"].values[0],
            "step_counting": df["Q18_1"].values[0],
            "difficulty": df["Q19_1"].values[0],
            "comments": df["Q16"].values[0],
        }

    def _prolific_values(self, prolific_id):
        with open("{}".format(self.args.prol), "r") as src:
            df = pd.read_csv(src)

        df = df[df["participant_id"] == prolific_id]
        if df.empty:
            return {
                "prolific_id": prolific_id,
            }

        return {
            "prolific_id": prolific_id,
            "status": df["status"].values[0],
            "age": df["age"].values[0],
            "prolific_score": df["prolific_score"].values[0],
            "entered_code": df["entered_code"].values[0],
            "employment_status": df["Employment Status"].values[0],
            "sex": df["Sex"].values[0],
            "student_status": df["Student Status"].values[0],
        }

    def get_row(self, prolific_id, task_id):
        result = self._task_values(task_id)
        result.update(self._prolific_values(prolific_id))
        result.update(self._qualtrics_values(task_id))
        return result

    def phase_performance(self, df, phases):
        return 1 - df["pickedValue"].apply(lambda x: abs(x - 0.5))[df["phaseIndex"].isin(phases)].mean()


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--task", "-t", required=True)
    parser.add_argument("--prol", "-p", required=True)
    parser.add_argument("--qual", "-q", required=True)
    args = parser.parse_args()
    if not os.path.isfile(args.qual):
        raise ValueError("qualtrics file '{}' couldn't be found".format(args.qual))

    if not os.path.isfile(args.prol):
        raise ValueError("prolific file '{}' couldn't be found".format(args.prol))

    if not os.path.isdir(args.task):
        raise ValueError("input dir '{}' couldn't be found".format(args.task))

    m = Main(args)
    prolific_to_task = m.get_prolific_to_task()
    m.aggregate(prolific_to_task)


if __name__ == "__main__":
    main()