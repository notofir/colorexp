function createRecord({
  phaseIndex,
  trialIndex,
  isTutorial,
  leftValue,
  rightValue,
  pickedValue,
  didDisplayHint,
  displayedHintSide,
  isDisplayedHintTrue,
  didFollowHint,
  hintGroupSize,
  trialTimeMs,
  keyPresses,
}) {
  return {
    phaseIndex: phaseIndex,
    trialIndex: trialIndex,
    isTutorial: isTutorial,
    leftValue: leftValue,
    rightValue: rightValue,
    pickedValue: pickedValue,
    didDisplayHint: didDisplayHint,
    displayedHintSide: displayedHintSide,
    isDisplayedHintTrue: isDisplayedHintTrue,
    didFollowHint: didFollowHint,
    hintGroupSize: hintGroupSize,
    trialTimeMs: trialTimeMs,
    keyPresses: keyPresses,
  };
}

export default createRecord;
