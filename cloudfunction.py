from google.cloud import storage
from flask import request, jsonify, make_response

BUCKET_NAME = "colortask"


def _upload_file(content, path):
    storage_client = storage.Client()
    bucket = storage_client.get_bucket(BUCKET_NAME)
    my_file = bucket.blob("records/" + path)
    my_file.upload_from_string(content, content_type="text/plain")


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


def _verifyNumber(number):
    if number < 0 or number > 100:
        raise ValueError("received bad number {}".format(number))

def index(request):
    if request.method == "OPTIONS": # CORS preflight
        print("options")
        return _build_cors_preflight_response()
    elif request.method == "POST": # The actual request following the preflight
        data = request.json
        phaseIndex = int(data["phaseIndex"])
        _verifyNumber(phaseIndex)
        trialIndex = int(data["trialIndex"])
        _verifyNumber(trialIndex)
        path = "{}.{}".format(phaseIndex, trialIndex)
        _upload_file(str(data["record"]), path)
        result = {"status": f"successfully uploaded records to {path}"}
        return _corsify_actual_response(make_response(jsonify(result)))
    else:
        raise RuntimeError("Weird - don't know how to handle method {}".format(request.method))