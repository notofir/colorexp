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
          title: "Welcome to the Color Judgement Experiment!",
          text: `
  In this game you will be asked to judge the brightness of different colors.
  On every step, you will be presented with three colorful squares, like this:
  TODO: add png
  
  The upper two squares will remain static and will not change during a trial. They represent two ends of a brightness continuum of a specific hue.
  The upper right square represents the darkest point on this spectrum, and the left one represents the brightest point.
  In the beginning of every trial, the square in the middle (hereafter: the game square) will present a color at a specific point along the continuum, picked at random so that sometimes it will be closer in brightness-level to that
  of the bright end and sometimes to the dark end.
  You can change the brightness level of the game square by pressing the arrow keys on your keyboard:
  - Pressing the right arrow key will turn the color in the game square darker.
  - Pressing the left arrow key will turn the color in the game square lighter.
  `,
        },
        {
          title: "Your Goal",
          text: `
  Your goal in this task is to pin-point the most accurate middle brightness level between the two upper squares.
  How to achieve this goal? In every trial, you can press the arrow-keys as many times as you like, thus modifying the game square’s brightness. When you feel that the color you’ve settled on represents the exact mid-point, you should press the “submit” button appearing under it.
  Option B:
  When you have settled on a color that you judge to be the exact mid-point of the brightness continuum, press the “submit” button appearing under it.
  `,
        },
        {
          title: "The Practice Phase",
          text: `
  The following practice will allow you to familiarize yourself with the interface of this task and practice its operation.
  Notice that your performance in the training phase will not be counted towards your final results. You will be notified when the actual experiment begins.
  
  Press “start” to start the practice phase.
  `,
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
          title: "Practice: Step 2",
          text: `
  On the next practice phase, you will receive feedback, to help you improve your skill in the game.
  At the end on every trial, right after you hit the “submit” button, you will be provided with the feedback for you last choice. The feedback will be represented by a number, as well as graphically via an axis.
  TODO: add png
  <b>Axis</b>: Your final choice will be marked visibly in the shape of a grey circle.
  <b>Numeric score</b>: the range of possible scores moves between 0-100, with 50 being the best score possible, representing an accurate identification of the mid-point between the two upper squares. Conversely, the closer your score gets to either 0 (the brightest end) or 100 (darkest), it indicates a worse performance.
  `,
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
          title: "Practice: Step 3",
          text: `
  On the next practice phase, you will be able to request hints. The hints will direct you and help you find the correct mid-point.
  Hints can be asked for by pressing the “Press for hint” button.
  The hints are based on two previous experiments that utilized the Color Judgement Task. Data for the hints is based on the participants’ choices. The first experiment was a small-scale pilot study, in which only five participants performed the task. After the pilot, a second study was conducted, this time with 107 participants. You will receive hints based on these two studies.
  Before you begin using hints, it is important that you are familiar with a fundamental statistical principle, stating that information is more likely to be accurate when it is based on larger pools of data. In the context of the Color Judgement Task, it means that hints from the larger sample (of 107 participants) are of higher quality than those relying on the smaller sample (5 participants).
  `,
        },
        {
          title: "The Hints",
          text: `
  Every time you request a hint, an arrow will be presented on the screen. It will look something like this:
  TODO: add png
  
  If the majority of the participants in the previous experiment picked a darker shade than the one currently presented in the square game (aka they continued going rightwards prior to pressing “submit”), a rightward arrow will appear, as in the example above.
  Conversely, If the majority of the participants chose a brighter color than the one currently presented, a leftward arrow will appear.
  Finally, if most participants chose the color currently on display as their assumed mid-point, a checkmark would appear onscreen.
  Notice! The analysis of our past experiments indicated very high accuracy rates, so in most cases the hints presented to you are very reliable. Nevertheless, the performance of past participants was not perfect, so rarely the hints might be misleading.
  `,
        },
        {
          title: "",
          text: `
  Now, a short practice will begin. All hints at this stage will be based on the results of our preliminary study, aka the smaller sample comprised of five participants.
  To help you familiarize yourself with the interface of the hint, please press the “Press for hint” button on every trial. Try pressing it in different situations and notice the different results.
  `,
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
          title: "Practice: Step 4",
          text: `
  Now, the final training phase will begin. It will be similar to the previous one, only with hints from the 107-participant study.
  `,
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
          title: "The Experiment",
          text: `
  You have completed the practice phase!
  Now, the real task will begin. As in the practice phase, you are still requested to identify the mid-point brightness continuums of different hues.
  From now on, your performance will be calculated towards your final results.
  Please notice that there is no time limit for each trial (beyond our general requirement to take all trials in a row, without substantial breaks). Your performance will be evaluated based on accuracy, not on pace.
  `,
        },
        {
          title: "",
          text: "At the following phase, hints will be provided to you from time to time. The hints will be delivered automatically, without request. Some will be based on the large sample, while others on the small one. Remember: hints from larger sample are of higher quality.",
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
          title: "Resting page",
          text: "rest.",
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
          title: "The second experimental phase",
          text: `
  You have completed the first experimental phase!
  In the following phase, you will be able to request hints by pressing a designated button, like in the practice phase. However, now every time you press the button the screen will freeze, and you will be required to wait 10 seconds before the hint is revealed.
  On some trials you will be offered hints extracted from the larger sample (107 participants) and in others from the small sample (5 participants). You will know in advance what type of hint is offered to you by the number appearing on the button, and may decide accordingly.
  TODO: add png
  Notice: Hint usage will not affect your results.
  `,
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
          title: "Resting page",
          text: "rest.",
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
