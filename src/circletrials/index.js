const phases = [
  {
    taskName: "ColorsTrial",
    instructions: [
      {
        title: "Phase 1 First Page",
        text: "page 1 inst.",
      },
      {
        title: "Second page",
        text: "page 2 inst.",
      },
    ],
    numberOfTrials: 3,
    isHintAvailable: false,
    shouldDisplayModal: false,
  },
  {
    taskName: "ColorsTrial",
    instructions: [
      {
        title: "Phase 2 First Page",
        text: "page 1 inst.",
      },
      {
        title: "Second page",
        text: "page 2 inst.",
      },
    ],
    numberOfTrials: 3,
    isHintAvailable: false,
    shouldDisplayModal: true,
  },
  {
    taskName: "ColorsTrial",
    instructions: [
      {
        title: "Phase 3 First Page",
        text: "page 1 inst.",
      },
      {
        title: "Second page",
        text: "page 2 inst.",
      },
    ],
    numberOfTrials: 3,
    isHintAvailable: true,
    shouldDisplayModal: false,
  },
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
