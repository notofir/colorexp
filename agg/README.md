```bash
cd agg
docker build . -t agg
docker run -it --rm -v $PWD:/app agg bash

docker run -it -v C:\Users\ofira\Code\colorexp\agg:/app agg bash

python agg.py -t records -p prolific.csv --qual qual.csv
```

```
gcloud init # pick ofirarias-com
gcloud auth login
gsutil -m rsync -d -r gs://colortask/records records
```

__SHACHAR__

*Get files*
Open Google Cloud SDK Shell and run:
alway run:
cd c:\users\shach\code\colorexp\agg
run only to download and sync:
gsutil rsync -d -r gs://colortask/records records

*Aggregate*
Files should be in C:\Users\shach\Code\colorexp\agg
docker run --rm -it -v C:\Users\shach\Code\colorexp\agg:/app agg python agg.py ^
    --task "records" ^
	--prol "prolific_pilot_1.csv" ^
	--qual "qual_pilot_1.csv"
