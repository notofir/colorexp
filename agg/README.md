```bash
cd agg
docker build . -t agg
docker run agg bash

docker run -it -v C:\Users\ofira\Code\colorexp\agg:/app agg bash

python agg.py -t records -p "prolific demographic data complete 39 ppl.csv" --qual "Shachar+Ruppin+Thesis_January+10,+2022_17.28.csv"
```

```
gcloud init # pick ofirarias-com
gsutil rsync -d -r gs://colortask/records records
```