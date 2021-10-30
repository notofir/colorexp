function postResults(records) {
  const xhr = new XMLHttpRequest();
  xhr.open(
    "POST",
    "https://us-central1-ofirarias-com.cloudfunctions.net/colortask",
    true
  );
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(
    JSON.stringify({ records: records, phaseIndex: -1, trialIndex: -1 })
  );
  console.log("finished task");
}

export default postResults;
