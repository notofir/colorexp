import os
import csv

import pandas as pd

def get_task_ids():
    result = []
    files = os.listdir("records")
    for f in files:
        if f.endswith(".csv"):
            result.append(f[:-4])

    return result

def get_prolific_to_task():
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

def aggregate2(prolific_to_task):
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

def get_true_hint_phase_7_8(df):
    return df[(df["phaseIndex"] >= 7) & (df["didGiveHint"] == True)]

def aggregate(prolific_to_task):
    with open("aggregated.csv", "w") as dest:
        writer = csv.DictWriter(dest, fieldnames=[
            "prolific_id",
            "task_id",
            "is_experimental",
            "total_proxy_usage",
            "poor_proxy_usage",
            "good_proxy_usage",
        ])
        writer.writeheader()
        for prolific_id, task_id in prolific_to_task.items():
            with open("records/{}.csv".format(task_id), "r") as src:
                df = pd.read_csv(src)
                print(df[df["phaseIndex"] >= 7]["didGiveHint"])
                true_hint_phase_7_8_ = get_true_hint_phase_7_8(df)

                writer.writerow({
                    "prolific_id": prolific_id,
                    "task_id": task_id,
                    "is_experimental": df["isExperimental"][0],
                    "total_proxy_usage": true_hint_phase_7_8_["didGiveHint"].count(),
                    "poor_proxy_usage": true_hint_phase_7_8_[df["hintGroupSize"] == 5]["didGiveHint"].count(),
                    "good_proxy_usage": true_hint_phase_7_8_[df["hintGroupSize"] == 107]["didGiveHint"].count(),
                })


print(get_task_ids())
prolific_to_task = get_prolific_to_task()
aggregate(prolific_to_task)