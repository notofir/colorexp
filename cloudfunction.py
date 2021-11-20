from google.cloud import storage, datastore
from flask import request, jsonify, make_response

BUCKET_NAME = "colortask"

RECORD_KEYS = [
    "phaseIndex",
    "trialIndex",
    "isTutorial",
    "isPractice",
    "isAlertTest",
    "leftValue",
    "rightValue",
    "pickedValue",
    "didGiveHint",
    "displayedHintSide",
    "isDisplayedHintTrue",
    "hintDelayS",
    "isAutoHint",
    "didFollowHint",
    "hintGroupSize",
    "trialTimeMs",
    "keyPresses",
    "isExperimental",
]


def _upload_file(content, path):
    storage_client = storage.Client()
    bucket = storage_client.get_bucket(BUCKET_NAME)
    my_file = bucket.blob("records/" + path)
    return my_file.upload_from_string(content, content_type="text/plain")


def _store_records_in_ds(datastore_client, uid, records):
    entities = []
    if len(records) == 1:
        path = "record"
    else:
        path = "records"
    
    for record in records:
        phaseIndex = int(record["phaseIndex"])
        _verify_number(phaseIndex)
        trialIndex = int(record["trialIndex"])
        _verify_number(trialIndex)

        entity_key = datastore_client.key(path, uid, "phaseIndex", phaseIndex, "trialIndex", trialIndex)
        entity = datastore_client.get(entity_key)
        if entity is None:
            entity = datastore.Entity(key=entity_key)

        for k in RECORD_KEYS:
            entity[k] = record.get(k, None)

        entities.append(entity)

    print("ds", uid, str(datastore_client.put_multi(entities)))
    return {"status": f"successfully uploaded records to {path}"}


def _store_records_in_gcs(uid, csv):
    path = "{}".format(uid)
    print("gcs", uid, _upload_file(str(csv), path))
    return {"status": f"successfully uploaded records to {path}"}


def _build_cors_preflight_response():
    response = make_response()
    response.headers.add("Access-Control-Allow-Origin", "*")
    response.headers.add('Access-Control-Allow-Headers', "*")
    response.headers.add('Access-Control-Allow-Methods', "*")
    return response


def _corsify_actual_response(response):
    response.headers.add("Access-Control-Allow-Origin", "*")
    print(response)
    return response


def _verify_number(number):
    if number < 0 or number > 100:
        raise ValueError("received bad number {}".format(number))

def _verify_uid(uid):
    if uid < 10000 or uid > 99999:
        raise ValueError("invalid uid {}".format(uid))


def index(request):
    if request.method == "OPTIONS": # CORS preflight
        print("options")
        return _build_cors_preflight_response()
    elif request.method == "POST": # The actual request following the preflight
        data = request.json
        datastore_client = datastore.Client()
        result = {"status": "couldn't resolve request"}
        uid = int(data["uid"])
        _verify_uid(uid)
        
        if "records" in data:
            result = _store_records_in_ds(datastore_client, uid, data["records"])
        elif "csv" in data:
            result = _store_records_in_gcs(uid, data["csv"])
        else:
            result = {"status": "submitted successfuly"}

        return _corsify_actual_response(make_response(jsonify(result)))
    else:
        raise RuntimeError("Weird - don't know how to handle method {}".format(request.method))