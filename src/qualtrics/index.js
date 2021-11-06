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

function postResults(participantId, records) {
  const xhr = new XMLHttpRequest();
  xhr.open(
    "POST",
    "https://us-central1-ofirarias-com.cloudfunctions.net/colortask",
    true
  );
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(JSON.stringify({ participantId: participantId, records: records }));

  const csv = toCSV(records);
  console.log(csv);
  console.log("finished task");
}

export default postResults;
