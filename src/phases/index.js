import createHint from "../hint";

function createPhase({
  taskName = "ColorsTrial",
  instructions,
  numberOfTrials,
  hintCreator = function () {
    return createHint({});
  },
  isPractice = false,
  isTutorial = false,
  shouldDisplayFeedback = false,
  alertnessTestIndex = -1,
}) {
  return {
    taskName: taskName,
    instructions: instructions,
    isPractice: isPractice,
    isTutorial: isTutorial,
    numberOfTrials: numberOfTrials,
    shouldDisplayFeedback: shouldDisplayFeedback,
    hintCreator: hintCreator,
    alertnessTestIndex: alertnessTestIndex,
  };
}

const phases = [
  // Phase 1
  createPhase({
    instructions: [
      {
        title: "First Page",
        text: "page 1 inst.",
      },
      {
        title: "Second page",
        text: "page 2 inst.",
      },
    ],
    isPractice: true,
    isTutorial: true,
    numberOfTrials: 5,
  }),
  // Phase 2
  createPhase({
    instructions: [
      {
        title: "First Page",
        text: "page 1 inst.",
      },
      {
        title: "Second page",
        text: "page 2 inst.",
      },
    ],
    isPractice: true,
    numberOfTrials: 5,
    shouldDisplayFeedback: true,
  }),
  // Phase 3
  createPhase({
    instructions: [
      {
        title: "First Page",
        text: "page 1 inst.",
      },
      {
        title: "Second page",
        text: "page 2 inst.",
      },
    ],
    isPractice: true,
    alertnessTestIndex: 3,
    numberOfTrials: 5,
    hintCreator: function () {
      return createHint({
        groups: [{ size: 5, certainty: 0.8 }],
      });
    },
  }),
  // Phase 4
  createPhase({
    instructions: [
      {
        title: "First Page",
        text: "page 1 inst.",
      },
      {
        title: "Second page",
        text: "page 2 inst.",
      },
    ],
    isPractice: true,
    numberOfTrials: 5,
    hintCreator: function () {
      return createHint({
        groups: [{ size: 107, certainty: 1 }],
      });
    },
  }),
  // Phase 5
  createPhase({
    instructions: [
      {
        title: "First Page",
        text: "page 1 inst.",
      },
      {
        title: "Second page",
        text: "page 2 inst.",
      },
    ],
    numberOfTrials: 25,
    hintCreator: function (isConditionA) {
      if (!isConditionA) {
        return createHint({});
      }
      return createHint({
        autoHintClicks: { min: 3, max: 7 },
        groups: [
          { size: 5, certainty: 0.8 },
          { size: 107, certainty: 1 },
        ],
      });
    },
  }),
  // Phase 6
  createPhase({
    instructions: [
      {
        title: "First Page",
        text: "page 1 inst.",
      },
      {
        title: "Second page",
        text: "page 2 inst.",
      },
    ],
    numberOfTrials: 25,
    hintCreator: function (isConditionA) {
      if (!isConditionA) {
        return createHint({});
      }
      return createHint({
        autoHintClicks: { min: 3, max: 7 },
        groups: [
          { size: 5, certainty: 0.8 },
          { size: 107, certainty: 1 },
        ],
      });
    },
  }),
  // Phase 7
  createPhase({
    instructions: [
      {
        title: "First Page",
        text: "page 1 inst.",
      },
      {
        title: "Second page",
        text: "page 2 inst.",
      },
    ],
    numberOfTrials: 25,
    hintCreator: function () {
      return createHint({
        delay: 10,
        groups: [
          { size: 5, certainty: 1 },
          { size: 107, certainty: 1 },
        ],
      });
    },
  }),
  // Phase 8
  createPhase({
    instructions: [
      {
        title: "First Page",
        text: "page 1 inst.",
      },
      {
        title: "Second page",
        text: "page 2 inst.",
      },
    ],
    alertnessTestIndex: 15,
    numberOfTrials: 25,
    hintCreator: function () {
      return createHint({
        delay: 10,
        groups: [
          { size: 5, certainty: 1 },
          { size: 107, certainty: 1 },
        ],
      });
    },
  }),
  // Phase Bye Bye
  createPhase({
    instructions: [
      {
        title: "Task has ended",
        text: "Thank you for participating. Bye.",
      },
    ],
  }),
];

export default phases;
