function createRecord({
  phaseIndex,
  trialIndex,
  isTutorial,
  isPractice,
  isAlertTest,
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
    isPractice: isPractice,
    isAlertTest: isAlertTest,
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
