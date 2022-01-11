```bash
cd agg
docker build . -t agg
docker run agg bash
```

```
gcloud init # pick ofirarias-com
gsutil rsync -d -r gs://colortask/records records
```