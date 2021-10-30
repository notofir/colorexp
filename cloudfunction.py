from google.cloud import storage
import io

BUCKET_NAME = "my_bucket_name"


def _upload_file(content, path):
    storage_client = storage.Client()
    bucket = storage_client.get_bucket(BUCKET_NAME)
    my_file = bucket.blob("records/" + path)
    my_file.upload_from_string(content, content_type="text/plain")


def index(request):
    """Responds to any HTTP request.
    Args:
        request (flask.Request): HTTP request object.
    Returns:
        The response text or any set of values that can be turned into a
        Response object using
        `make_response <http://flask.pocoo.org/docs/1.0/api/#flask.Flask.make_response>`.
    """
    _upload_file(request.form)
