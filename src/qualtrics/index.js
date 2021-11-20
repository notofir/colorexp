function toCSV(records) {
  const replacer = (key, value) => (value === null ? "" : value); // specify how you want to handle null values here
  const header = Object.keys(records[0]);
  return [
    header.join(","), // header row first
    ...records.map((row) =>
      header
        .map((fieldName) => JSON.stringify(row[fieldName], replacer))
        .join(",")
    ),
  ].join("\r\n");
}

function postResults(uid, records) {
  const xhr = new XMLHttpRequest();
  xhr.open(
    "POST",
    "https://us-central1-ofirarias-com.cloudfunctions.net/colortask",
    true
  );
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(JSON.stringify({ uid: uid, records: records }));

  if (records.length > 1) {
    const csv = toCSV(records);
    xhr.send(JSON.stringify({ uid: uid, csv: csv }));
    console.log("finished task");
  }
}

export default postResults;
