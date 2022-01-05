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

  const isHintAvailable = hintGroupSize != 0;

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
    isAutoHint: isHintAvailable ? isAutoHint : null,
    hintDelayS: isHintAvailable ? hintDelayS : null,
    didGiveHint: isHintAvailable ? didGiveHint : null,
    displayedHintSide: isHintAvailable ? displayedHintSide : null,
    isDisplayedHintTrue: isHintAvailable ? isDisplayedHintTrue : null,
    didFollowHint: isHintAvailable ? didFollowHint : null,
    hintGroupSize: isHintAvailable ? hintGroupSize : null,
    trialTimeMs: trialTimeMs,
    keyPresses: keyPresses,
    isExperimental: isExperimental,
  };
}

export default createRecord;
