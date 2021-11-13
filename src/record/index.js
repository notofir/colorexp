import phases from "../phases";

function createRecord({
  phaseIndex,
  trialIndex,
  isTutorial,
  isPractice,
  isAlertTest,
  leftValue,
  rightValue,
  pickedValue,
  didGiveHint,
  displayedHintSide,
  isDisplayedHintTrue,
  hintDelayS,
  isAutoHint,
  didFollowHint,
  hintGroupSize,
  trialTimeMs,
  keyPresses,
  isExperimental,
}) {
  // Normalize for data.
  const fixedPhaseIndex = phaseIndex + 1;
  let fixedTrialIndex = trialIndex + 1;
  for (let i = 0; i < phaseIndex; i++) {
    fixedTrialIndex += phases[i].numberOfTrials;
  }

  const isHintAvailable = hintGroupSize == 0;

  return {
    phaseIndex: fixedPhaseIndex,
    trialIndex: fixedTrialIndex,
    isTutorial: isTutorial,
    isPractice: isPractice,
    isAlertTest: isAlertTest,
    leftValue: leftValue,
    rightValue: rightValue,
    pickedValue: pickedValue,
    isHintAvailable: isHintAvailable,
    isAutoHint: isHintAvailable ? null : isAutoHint,
    hintDelayS: isHintAvailable ? null : hintDelayS,
    didGiveHint: isHintAvailable ? null : didGiveHint,
    displayedHintSide: isHintAvailable ? null : displayedHintSide,
    isDisplayedHintTrue: isHintAvailable ? null : isDisplayedHintTrue,
    didFollowHint: isHintAvailable ? null : didFollowHint,
    hintGroupSize: isHintAvailable ? null : hintGroupSize,
    trialTimeMs: trialTimeMs,
    keyPresses: keyPresses,
    isExperimental: isExperimental,
  };
}

export default createRecord;
