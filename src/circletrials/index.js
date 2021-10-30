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
    shouldDisplayModal: true,
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
    isHintAvailable: true,
    hintGroupSizes: [5],
    hintCertainty: 0.8,
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
    isHintAvailable: true,
    hintGroupSizes: [107],
    hintCertainty: 0.8,
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
    isHintAvailable: true,
    hintGroupSizes: [5, 107],
    hintCertainty: 0.8,
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
    isHintAvailable: true,
    shouldDelayHint: true,
    hintGroupSizes: [5, 107],
    hintCertainty: 1,
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
