import createHint from "../hint";

const isConditionA = true;

const phases = [
  // Phase 1
  {
    taskName: "ColorsTrial",
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
    isTutorial: true,
    numberOfTrials: 3,
  },
  // Phase 2
  {
    taskName: "ColorsTrial",
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
    numberOfTrials: 3,
    shouldDisplayFeedback: true,
  },
  // Phase 3
  {
    taskName: "ColorsTrial",
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
    numberOfTrials: 3,
    hint: createHint({
      groups: [{ size: 5, certainty: 0.8 }],
    }),
  },
  // Phase 4
  {
    taskName: "ColorsTrial",
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
    numberOfTrials: 3,
    hint: createHint({
      groups: [{ size: 107, certainty: 1 }],
    }),
  },
  // Phase 5
  {
    taskName: "ColorsTrial",
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
    numberOfTrials: 3,
    hint: createHint({
      autoHintClicks: isConditionA ? { min: 3, max: 7 } : undefined,
      groups: [
        { size: 5, certainty: 0.8 },
        { size: 107, certainty: 1 },
      ],
    }),
  },
  // Phase 6
  {
    taskName: "ColorsTrial",
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
    numberOfTrials: 3,
    hint: createHint({
      delay: 10,
      groups: [
        { size: 5, certainty: 1 },
        { size: 107, certainty: 1 },
      ],
    }),
  },
  // Phase Bye Bye
  {
    instructions: [
      {
        title: "Task has ended",
        text: "Thank you for participating. Bye.",
      },
    ],
  },
];

export default phases;
