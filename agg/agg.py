import argparse
from multiprocessing.sharedctypes import Value
import os
import math
import csv

import numpy as np
import pandas as pd


class SkipException(Exception): pass


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
        result = []
        with open(self.args.qual, "r") as f:
            reader = csv.DictReader(f)
            next(reader)
            next(reader)
            for line in reader:
                if line["Q1"] == "":
                    continue

                if os.path.isfile("{}/{}.csv".format(self.args.task, line["colortaskUID"])):
                    result.append((line["Q1"], line["colortaskUID"]))

        return result

    def aggregate(self, prolific_to_task):
        with open("aggregated.csv", "w") as dest:
            writer = csv.DictWriter(dest, fieldnames=[
                "prolific_id",
                "task_id",
                "is_experimental",
                "total_proxy_usage_6-7",
                "poor_proxy_usage_6-7",
                "good_proxy_usage_6-7",
                "performance_1",
                "performance_2",
                "performance_3",
                "performance_4",
                "performance_5",
                "performance_6",
                "performance_7",
                "performance_practice_1-3",
                "performance_manipulation_4-5",
                "performance_voluntary_6-7",
                "performance_overall",
                "presses_mean",
                "presses_mean_6-7",
                "time_ms_mean",
                "time_ms_mean_6-7",
                "time_ms_sum_1-3",
                "time_ms_sum_4-5",
                "time_ms_sum_6-7",
                "hint_followed_percentage_6-7",
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
                "duration_total_s",
                "anxiety",
                "depression",
                "OCI-R_sum",
                "SPISI_sum",
                "entry_test",
                "step_counting",
                "difficulty",
                "reasons_hints_helpful",
                "reasons_hints_reassured",
                "reasons_hints_external",
                "reasons_hints_confident",
                "reasons_not_hints_not_helpful",
                "reasons_not_hints_confident",
                "reasons_not_hints_important",
                "reasons_not_hints_quickly",
                "reasons_not_hints_misleading",
                "reasons_not_hints_count",
                "reasons_not_hints_strategy",
                "reasons_not_hints_believe",
                "explanation_reasons_hints",
                "explanation_reasons_not_hints",
                "practice",
                "comments",
            ])
            writer.writeheader()
            for prolific_id, task_id in prolific_to_task:
                try:
                    writer.writerow(self.get_row(prolific_id, task_id))
                except SkipException:
                    print(f"skipping {prolific_id} {task_id}")

    def _task_values(self, task_id):
        with open("{}/{}.csv".format(self.args.task, task_id), "r") as src:
            df = pd.read_csv(src)

        df_hints_given = df[df["didGiveHint"] == True]
        df_hints_given_6_7 = df_hints_given[
            df_hints_given["phaseIndex"].isin([6, 7])
        ]
        df_hints_given_6_7_poor = df_hints_given_6_7[df_hints_given_6_7["hintGroupSize"] == 5]
        df_hints_given_6_7_good = df_hints_given_6_7[df_hints_given_6_7["hintGroupSize"] == 107]
        df_time_exists = df[df["trialTimeMs"].notnull()]
        return {
            "task_id": task_id,
            "is_experimental": df["isExperimental"][0],
            "total_proxy_usage_6-7": df_hints_given_6_7["didGiveHint"].count(),
            "poor_proxy_usage_6-7": df_hints_given_6_7_poor["didGiveHint"].count(),
            "good_proxy_usage_6-7": df_hints_given_6_7_good["didGiveHint"].count(),
            "performance_1": self.phase_performance(df, [1]),
            "performance_2": self.phase_performance(df, [2]),
            "performance_3": self.phase_performance(df, [3]),
            "performance_4": self.phase_performance(df, [4]),
            "performance_5": self.phase_performance(df, [5]),
            "performance_6": self.phase_performance(df, [6]),
            "performance_7": self.phase_performance(df, [7]),
            "performance_practice_1-3": self.phase_performance(df, [1, 2, 3]),
            "performance_manipulation_4-5": self.phase_performance(df, [4, 5]),
            "performance_voluntary_6-7": self.phase_performance(df, [6, 7]),
            "performance_overall": self.phase_performance(df, list(range(1, 8))),
            "presses_mean": df["keyPresses"].mean(),
            "presses_mean_6-7": df[df["phaseIndex"].isin([6, 7])]["keyPresses"].mean(),
            "time_ms_mean":     df_time_exists["trialTimeMs"].mean(),
            "time_ms_mean_6-7": df_time_exists[df["phaseIndex"].isin([6, 7])]["trialTimeMs"].mean(),
            "time_ms_sum_1-3":  df_time_exists[df["phaseIndex"].isin([1, 2, 3])]["trialTimeMs"].sum(),
            "time_ms_sum_4-5":  df_time_exists[df["phaseIndex"].isin([4, 5])]["trialTimeMs"].sum(),
            "time_ms_sum_6-7":  df_time_exists[df["phaseIndex"].isin([6, 7])]["trialTimeMs"].sum(),
            "hint_followed_percentage_6-7": 100 * df_hints_given_6_7[df_hints_given_6_7["didFollowHint"] == True]["didFollowHint"].count() / df_hints_given_6_7["didFollowHint"].count()
            if not df_hints_given_6_7.empty else 0,
            "hint_followed_percentage": 100 * df_hints_given[df_hints_given["didFollowHint"] == True]["didFollowHint"].count() / df_hints_given["didFollowHint"].count()
            if not df_hints_given.empty else 0,
        }

    def _qualtrics_values(self, task_id):
        with open("{}".format(self.args.qual), "r") as src:
            df = pd.read_csv(src).drop([0, 1])

        df = df[df["colortaskUID"] == task_id]
        if df.empty:
            return {
            }

        try:
            anxiety = sum([int(df["DASSQ13#1_{}".format(i)].values[0]) for i in [1, 3, 5, 6, 9, 12, 13]])
        except ValueError:
            raise SkipException()
        ###anxiety = 0
        ###for i in [1, 3, 5, 6, 9, 12, 13]:
        ###    print(df["DASSQ13#1_{}".format(i)].values[0], type(df["DASSQ13#1_{}".format(i)].values[0]))
        ###    #if np.isnan(df["DASSQ13#1_{}".format(i)].values[0]):
        ###    #    raise SkipException()
        ###    anxiety += int(df["DASSQ13#1_{}".format(i)].values[0])

        return {
            "duration_total_s": df["Duration (in seconds)"].values[0],
            "anxiety": anxiety,
            "depression": sum([int(df["DASSQ13#1_{}".format(i)].values[0]) for i in [2, 4, 7, 8, 10, 11, 14]]),
            "OCI-R_sum": sum([int(df["OCI-R_{}".format(i)].values[0]) for i in range(1, 19)]),
            "SPISI_sum": sum([int(df["SPISI_{}".format(i)].values[0]) for i in range(1, 16)]),
            "entry_test": df["Q15"].values[0],
            "step_counting": df["Q18_1"].values[0],
            "difficulty": df["Q18_2"].values[0],
            "reasons_hints_helpful": df["Q19_1"].values[0],
            "reasons_hints_reassured": df["Q19_6"].values[0],
            "reasons_hints_external": df["Q19_7"].values[0],
            "reasons_hints_confident": df["Q19_8"].values[0],
            "reasons_not_hints_not_helpful": df["Q22_1"].values[0],
            "reasons_not_hints_confident": df["Q22_5"].values[0],
            "reasons_not_hints_important": df["Q22_6"].values[0],
            "reasons_not_hints_quickly": df["Q22_8"].values[0],
            "reasons_not_hints_misleading": df["Q22_10"].values[0],
            "reasons_not_hints_count": df["Q22_11"].values[0],
            "reasons_not_hints_strategy": df["Q22_12"].values[0],
            "reasons_not_hints_believe": df["Q22_13"].values[0],
            "explanation_reasons_hints": df["Q23"].values[0],
            "explanation_reasons_not_hints": df["Q24"].values[0],
            "practice": df["Q26_1"].values[0],
            "comments": df["Q16"].values[0] if not pd.isnull(df["Q16"].values[0]) else "",
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
        try:
            result.update(self._qualtrics_values(task_id))
        except SkipException as exc:
            raise
        except Exception as exc:
            print("Exception", task_id, prolific_id)
            raise
        return result

    def phase_performance(self, df, phases):
        # return 1 - df["pickedValue"].apply(lambda x: abs(x - 0.5))[df["phaseIndex"].isin(phases)].mean()
        return df[df["phaseIndex"].isin(phases)]["pickedValue"].mean()


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--task", "-t", required=True)
    parser.add_argument("--prol", "-p", required=True)
    parser.add_argument("--qual", "-q", required=True)
    args = parser.parse_args()
    if not os.path.isfile(args.qual):
        raise ValueError(
            "qualtrics file '{}' couldn't be found".format(args.qual))

    if not os.path.isfile(args.prol):
        raise ValueError(
            "prolific file '{}' couldn't be found".format(args.prol))

    if not os.path.isdir(args.task):
        raise ValueError("input dir '{}' couldn't be found".format(args.task))

    m = Main(args)
    prolific_to_task = m.get_prolific_to_task()
    m.aggregate(prolific_to_task)


if __name__ == "__main__":
    main()
