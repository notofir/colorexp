function createRecord(
  isTutorial,
  leftValue,
  rightValue,
  pickedValue,
  didDisplayHint,
  hintSide,
  didFollowHint,
  hintGroupSize
) {
  if (typeof hintGroupSize === undefined) throw "missing parameter";
  return {
    isTutorial: isTutorial,
    leftValue: leftValue,
    rightValue: rightValue,
    pickedValue: pickedValue,
    didDisplayHint: didDisplayHint,
    hintSide: hintSide,
    didFollowHint: didFollowHint,
    hintGroupSize: hintGroupSize,
  };
}

export default createRecord;
