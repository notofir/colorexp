function createHint({
  groups = [{ size: 0, certainty: 0 }],
  delay = 0,
  autoHintClicks = { min: -1, max: -1 },
}) {
  return {
    groups: groups,
    delay: delay,
    autoHintClicks: autoHintClicks,
  };
}

export default createHint;
