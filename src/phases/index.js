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
  taskName = "coloursTrial",
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
        title: "Welcome to the colour Judgement Experiment",
        text: `
  In this game you will be asked to judge the brightness of different colours.
  
  At every step, you will be presented with three coloured squares, like these:
  
  <br />
  <?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="auto" height="27vh" viewBox="0 0 464 298" enable-background="new 0 0 464 298" xml:space="preserve">  <image id="image0" width="464" height="298" x="0" y="0"
    href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAdAAAAEqAgMAAADYOunsAAAABGdBTUEAALGPC/xhBQAAACBjSFJN
AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAADFBMVEX///+83Yg6UBZojyhX
16M5AAAAAWJLR0QAiAUdSAAAAAlwSFlzAAAWJQAAFiUBSVIk8AAAAAd0SU1FB+ULGwo3JawBMLsA
AACHSURBVHja7c1BEQAQFEBBRjEl9HOWTgMK/JuLYV+AtylJkiRJkiRJ15dbUD1ajqAOhUKhUCgU
CoVCoVAoFAqFQqFQKBQKhUKhUCgUCoVCoe+gkiRJkiRJkiRJkiR9X1lBEwqFQqFQKBQKhUKhUCgU
CoVCoVAoFAqFQqFQKBQKhUKhkiRJks7aZGdZ3IOe9vUAAAAhdEVYdENyZWF0aW9uIFRpbWUAMjAy
MToxMToxOCAyMTo0MTozMjX641AAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjEtMTEtMjdUMTA6NTU6
MzcrMDA6MDDBrW6DAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIxLTExLTI3VDEwOjU1OjM3KzAwOjAw
sPDWPwAAAABJRU5ErkJggg==" />
</svg>
   <br /> <br />
  
  The upper two squares will remain static and will not change during the trial. They represent two ends of a brightness continuum of a specific colour,
  from brightest (left) to darkest (right).
  

 
  `,
      },
      {
        title: "The Game Square",
        text: `
  
  In the beginning of every trial, the square in the middle (hereafter: the game square) will present a colour that is somewhere between the two
  ends of the spectrum. Its exact shade is picked at random.
   <br />
    During the game, you can change the brightness level of the game square by pressing the arrow keys on your keyboard (not your mouse):
   <br />
  - Press right to turn it darker.
   <br />
  - Press left to turn it lighter.
   <br /> <br />
  <?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="auto" height="35vh" viewBox="0 0 536 448" enable-background="new 0 0 536 448" xml:space="preserve">  <image id="image0" width="536" height="448" x="0" y="0"
    href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAhgAAAHACAMAAADX3+H9AAAABGdBTUEAALGPC/xhBQAAACBjSFJN
AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAACvlBMVEX////e7sS83Yjd7sOe
qYw6UBabpom1yJVojyiyxpLq6uqHh4cxMTEAAAANDQ1ISEiqqqr29vb+/v63t7cnJydRUVHg4ODA
wMAfHx9PT0/o6Ojp6elOTk4vLy+hoaHj4+Ps7Ozb29t9fX2Ghob8/Py6urrW1tajo6NAQEDl5eV/
f39EREQZGRnMzMyCgoKkpKRnZ2fExMT7+/uvr6+Li4vn5+fKysrS0tKTk5Pm5ubGxsZqamr09PQ3
NzdpaWny8vLT09NlZWXt7e1dXV1VVVXBwcGlpaU1NTWenp4SEhLz8/NfX1+cnJxxcXH5+fk6Ojqt
ra11dXXd3d1ycnL19fVkZGR5eXmsrKz4+Pjw9v95r/4lfP0Nbv0kfP14rv7u9f/a6f8pf/0mff3X
5/9Ej/0cd/0adv1Ajf3B2v692P6PvP4lff2Muv6IuP4ie/0hev2Etf4Nbv7A9v//6P6S4f///f+5
rv2h5v+x7f/o1f7Y///w2v4sqv7Q7//3/f962v+hbv0Nmv656P//9v/Qyv4sbv1TvP7g9v/Qw/7g
2v5Tbv2h6P/Arv0Npf7o//+5yv6qyv7A6P//5v7/6/7A9P/w6P6xyv6qz/7YyP7w6//o+P/Jz/6q
z//g+v/Ayv7w/f/Y1f7J7//o0/5ruv6qyv/36P56lf1z2P/Asf07jP3gyv4Ngv7J+P//+v+Sbv2x
mv0Nrv7w///Q/f//8f5ibv1MzP87bv3/+P+Kbv1i0/+q6/+57f/Y2v56k/0NyP/YyP3/9v56bv1M
sf7J7f/Qv/0sof7Q9v+hgv3ArP2K3/+5o/0sjP1Mz//gz/5Tz//QvP3g//9rbv3/9P/Az/6q1f//
7f4Nlf7Y+v/g3f654f/3+P/Qz/6q2P+xrv1Mv//o9v9zgv3Y9P/37f6Smv47tf7w7/+qqv0ssf7g
+P+xo/1rcc/TAAAAAWJLR0QAiAUdSAAAAAlwSFlzAAAWJQAAFiUBSVIk8AAAAAd0SU1FB+ULGwo3
JawBMLsAAAc4SURBVHja7d33l1xlAcfha0WjN8CCWEOLUqSo2FEUkSJWLKDCBBV7N8G1BKQYQ6Qv
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" />
</svg>

  
  `,
      },
      {
        title: "Your Goal",
        text: `
  Your goal in this task is to detect the most accurate average brightness level between the two upper squares.
  <br /> <br />
  
   
  In every trial, you can press the arrow-keys as many times as you like, thus modifying the brightness of the game square. 
  When you feel that the colour you’ve settled on represents the exact mid-point, press the “submit” button appearing under it.
  <br /> <br />
  
   The range of the game square's brightness is limited and a-symetrical, so  
  you can't find the mid-point by counting your steps. You have to rely on your subjective judgment.
  
   <br /> <br />
  
  <?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="auto" height="35vh" viewBox="0 0 536 448" enable-background="new 0 0 536 448" xml:space="preserve">  <image id="image0" width="536" height="448" x="0" y="0"
    href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAhgAAAHACAMAAADX3+H9AAAABGdBTUEAALGPC/xhBQAAACBjSFJN
AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAACvlBMVEX////e7sS83Yjd7sOe
qYw6UBabpom1yJVojyiyxpLq6uqHh4cxMTEAAAANDQ1ISEiqqqr29vb+/v63t7cnJydRUVHg4ODA
wMAfHx9PT0/o6Ojp6elOTk4vLy+hoaHj4+Ps7Ozb29t9fX2Ghob8/Py6urrW1tajo6NAQEDl5eV/
f39EREQZGRnMzMyCgoKkpKRnZ2fExMT7+/uvr6+Li4vn5+fKysrS0tKTk5Pm5ubGxsZqamr09PQ3
NzdpaWny8vLT09NlZWXt7e1dXV1VVVXBwcGlpaU1NTWenp4SEhLz8/NfX1+cnJxxcXH5+fk6Ojqt
ra11dXXd3d1ycnL19fVkZGR5eXmsrKz4+Pjw9v95r/4lfP0Nbv0kfP14rv7u9f/a6f8pf/0mff3X
5/9Ej/0cd/0adv1Ajf3B2v692P6PvP4lff2Muv6IuP4ie/0hev2Etf4Nbv7A9v//6P6S4f///f+5
rv2h5v+x7f/o1f7Y///w2v4sqv7Q7//3/f962v+hbv0Nmv656P//9v/Qyv4sbv1TvP7g9v/Qw/7g
2v5Tbv2h6P/Arv0Npf7o//+5yv6qyv7A6P//5v7/6/7A9P/w6P6xyv6qz/7YyP7w6//o+P/Jz/6q
z//g+v/Ayv7w/f/Y1f7J7//o0/5ruv6qyv/36P56lf1z2P/Asf07jP3gyv4Ngv7J+P//+v+Sbv2x
mv0Nrv7w///Q/f//8f5ibv1MzP87bv3/+P+Kbv1i0/+q6/+57f/Y2v56k/0NyP/YyP3/9v56bv1M
sf7J7f/Qv/0sof7Q9v+hgv3ArP2K3/+5o/0sjP1Mz//gz/5Tz//QvP3g//9rbv3/9P/Az/6q1f//
7f4Nlf7Y+v/g3f654f/3+P/Qz/6q2P+xrv1Mv//o9v9zgv3Y9P/37f6Smv47tf7w7/+qqv0ssf7g
+P+xo/1rcc/TAAAAAWJLR0QAiAUdSAAAAAlwSFlzAAAWJQAAFiUBSVIk8AAAAAd0SU1FB+ULGwo3
JawBMLsAAAc4SURBVHja7d33l1xlAcfha0WjN8CCWEOLUqSo2FEUkSJWLKDCBBV7N8G1BKQYQ6Qv
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" />
</svg>
 
  `,
      },
      {
        title: "Practice: Step 1",
        text: `
  <br />
  The following practice will allow you to familiarize yourself with the interface of this task and practice its operation.
  Notice that your performance in the training phase will not be counted towards your final results. You will be notified when the actual experiment begins.
  "Now try to find the mid-point"
  `,
      },
    ],
    isPractice: true,
    isTutorial: true,
    numberOfTrials: 3,
  }),
  // Phase 2
  createPhase({
    instructions: [
      {
        title: "Practice: Step 2",
        text: `
  On the next practice phase, you will receive feedback, to help you improve your skill in the game.
  <br /><br />
  At the end of every trial, right after you hit the “submit” button, you will be provided with feedback for your last choice. 
  The feedback will be represented by a number, as well as graphically..
  <br />
 
  <br />
  <b>Numeric score</b>: the range of possible scores is between 0-100, 
  with 50 being the best score possible, representing an accurate identification of the mid-point between the two upper squares. 
  Conversely, the closer your score gets to either 0 (the brightest end) or 100 (darkest), it indicates a worse performance.
  <br /><br />
  <?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="auto" height="20vh" viewBox="0 0 1194 181" enable-background="new 0 0 1194 181" xml:space="preserve">  <image id="image0" width="1194" height="181" x="0" y="0"
    href="data:image/png;base64,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" />
</svg>
 
  
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
  <br />
  On the next practice phase, you will be able to request hints. The hints will direct you and help you find the correct mid-point.
  
  <br /><br />
  The hints are based on participants' choices in two previous experiments that utilized the colour Judgement Task. 
  The first experiment was a small-scale pilot study, with five participants only. 
  Following the pilot, a second study was conducted, this time with 107 participants. You will receive hints based on these two studies.
  
  
  `,
      },
      {
        title: "Practice: Step 3",
        text: `
 
  <br />
  Before you begin using hints, it is important that you are familiar with a fundamental statistical principle, 
  stating that information is more likely to be accurate when it is based on larger sets of data. In the context of this game, 
  it means that hints from the larger sample (of 107 participants) are of higher quality than those relying on the smaller sample (5 participants).
  `,
      },
      {
        title: "The Hints",
        text: `
  Hints can be requested by pressing the “Press for hint” button, only once every trial.
  Every time you request a hint, an arrow will be presented on the screen. It will look something like this:
  <br />
  <br />
  
  <?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="auto" height="40vh" viewBox="0 0 1031 717" enable-background="new 0 0 1031 717" xml:space="preserve">  <image id="image0" width="1031" height="717" x="0" y="0"
    href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABAcAAALNCAYAAABTZwiqAAAABGdBTUEAALGPC/xhBQAAACBjSFJN
AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QA/wD/AP+gvaeTAAAA
CXBIWXMAABYlAAAWJQFJUiTwAAA/nElEQVR42u3deZhedX3//9eZmexkhZCwhoQdQRaVsMguKlVc
AJX6Vaw/raWi1rWlWFutXym/tqgIWLVSFSuoFRQ3EKqCiBpxYQ2GPUDYAiELWSaZyfn+cYcJIQtZ
Jjkz83k8rouLuc+c+9zv+x4CnOecparrug4AAABQrLamBwAAAACa1dH0AEDve/Lp5Krpdf74QPLU
oqanAdZk7PDkwJ2TV+5TZeutmp4GAChd5bQCGFhunZV8/ro6o4cms59uehpgXcZvlcxbkrz7qCr7
7dD0NABAyZxWAAPIk0+3wkBdCwPQH8x+Oqnr1p/bJ/2ZBQAaJA7AAHLV9NYRA8u6m54EWF/LupPR
Q1t/fgEAmiIOwADyxwccMQD90eynW39+AQCaIg7AAOLig9B/+fMLADRJHAAAAIDCiQMAAABQOHEA
AAAACicOAAAAQOHEAQAAACicOAAAAACFEwcAAACgcOIAAAAAFK6j6QEAYEsbOig5ds/kxZOqbDuy
9biqkrpOlixLHpmX3Dizzi/uaj0GABjoxAEAivJn+ybH71Nl1NDVv1dVybDByZTxyeRtqrxsr+TK
2+v8fEbTUwMAbF7iAABFGDooefthyYE7V2mvnn/9qkq23io59SVVdtm6zqU3OooAABi4xAGAXrLr
+OTEFya7b1tlyIp/uz7xdPJfv6pz52NNT7fSh49P9t6utXf81KLkohvq3PHI+j9/6KDkjS9q/WZ9
xmN1vndT/9hp/j9Tk4N2rtK2HmHg2TraksN2rdLWVueiXzb9LgAANg9xAFir1x2QnLBvlY61XLp0
aXcyZ2Fy04N1fvqn1tel2m+H5G2HVhk7fNXlHe1J+wC79OvrD0iO2L21k73j2CpVWr9V78tOOjB5
yaQNDwPPaKta1yd4ZG6dH9/W9LsBAOh9A+x/WYEtaXB7MnFU8soXVDnrhCqHTml6omYMHZS87oCV
YaCuW0cMPPRUsmBJ09P1viGD0rOT3Va1Hvdlu45Ppk6uMqh907YzuD156W5Vth/T9DsCAOh9jhwA
1kv38uTxBa2/V1UyelgyfPDKncSxw5OTDqoyd/GGHaI+EOy/YzJhZOvruk5umVXncz9reqrN5/cz
k70nJluPSB5b0Hrc2w7aOTl4l2TKNlUWLUs+/oN6o7d1yJTWrL1hm62Sw6Yk3/lD779nAIAmiQPA
elnWnfzo1jq/vnflsn23b12sbbvRrcdjhyVH7pbi4sCEUa3TB5Kka3ly/5NNT7R53Tor+bvLN35n
fX0cu+fK6yJ0zt20be02vkq1kacTPFd7W7L7hCrJ5n3/AABbmtMKgI1228PJD26ps2hp63FVJduP
6aW9sH6krUrPzmf38mT2gqYn4hl7TEhGDt307Tzb1iNa2wUAGEjEAWCTTLsvmbto5eMRQ5K9t2t6
KmgZOzwZ2svHyA0b1HunKQAA9BVOKwA2m2ff7aBreXLlbXXmLU5etV+VMcOSxcuS/55WZ9p9K59z
6JTkZXtX2X50MnjFv6GWdrUu7nfFzXVue3j11xk6KHnVvslBk6qMG9G6cFzSOhVi/uJk2n11Lvvj
xq+/Ns++JeCzt/3Ol1Z550tbj6+/u85Xf7Xy++NGJMftlRyw05pf+6aH6lx1+5rv/PDJ16y8GN7D
c5PP/LTOW6e2ZuhoS257uM5nf7pxP6s/2zc5ao8qY0ck7VVrnsfmJ1fdvuqpJGv7uX7vprXP+akr
67zugOQlu1QZNbR1pEXnsuTOx+v84JbkntmtdffeLnnH4avf8WH7MclFp7U+5yUr/pl57kxr8+yj
OgAAWDtxANgkk7dJhjzr3yRLliX3PbHmdbfZKjluryrDB7cet1UrL2g4dFDy1qnJSyZXaX/Oztzg
jmTK+OSMY6pcfXud79608nvbj0nedUSVHcesvhM4qD3ZeqvWjBu7fm86dEry2gOqjN9q9e8989rH
7VVl3+2TS2+sc+ustW+rqpK3H5bsPXHl+fQdG3ks2NF7JAfuvOrnPqg92XFs8uaDqwzpqHPtnRu3
7apK3n1Uss92q573P2RQst8OrRDwxevrPDx383zmy+vWRSIBAFg3cQDYJEfslox91iHWjy2os2TZ
mtfda+LKMPBc/2dqcvDk1n3o6zp5dH7ywJw6g9qTPSZU2WpI67fsx+xV5eF5K482OOWg9Ozod9fJ
I3OTWXPrLK9bh5RPGrdqAdjQ9dfl9keSuYvrjBmW7DGxtXPdXSd3Plpn7uLWOnc93vr7fjskJx+0
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
EgcKs7ZAcPrpp+fSSy8VCABgI3R1deXcc8/NmWee2bNMGACgPxEHCrS2QPDe97433/rWtwQCANgA
XV1d+cxnPpNPfepTPcuEAQD6G3GgUGsKBHPmzMmZZ56ZK664ounxAKBf6O7uzn/+53/mk5/8ZBYs
WJBEGACgfxIHCramQDBz5sxcddVVWbx4cdPjAUCfN3fu3FxxxRXCAAD9njhQuOcGgpEjR+boo4/O
sGHDmh4NAPq8MWPG5LjjjksiDADQv3U0PQDNq6oqJ510Uo455pgsXrw4EydObHokAOgX2tvb84EP
fCBvetObsvXWW2fEiBFNjwQAG0UcoMfYsWMzduzYpscAgH6lo6MjO++8c9NjAMAmcVoBAAAAFE4c
AAAAgMKJAwAAAFA4cQAAAAAKJw4AAABA4cQBAAAAKJw4AAAAAIUTB/qhJ598sukRNsnSpUvz1FNP
NT0GAAV4/PHHmx7BewCgXxAH+oFx48Zl/PjxPY+nTZuWrq6upsfaaLNnz85NN93U83jSpEkZNmxY
02MBMAAMGzYsO+20U8/jm266KfPnz296rI02f/78Vf6bueuuu2bEiBFNjwXAACQO9APjxo3LoYce
2vP4/PPPzze/+c0sX7686dE22IIFC/KpT30qP//5z5MkI0eOzMEHH9z0WAAMEMOHD88hhxzS8/ji
iy/OhRdemM7OzqZH22CdnZ258MILc/HFF/csO+iggzJ06NCmRwNgAKrquq6bHoLnd8stt+TUU0/N
HXfc0bPs1a9+dQ499NC0t7c3Pd56WbBgQb7//e/n1ltv7Vl22mmn5fzzz8+oUaOaHg+AAWLWrFl5
61vf2hOik+SII47I8ccfn8GDBzc93npZunRprrnmmlx//fU9y4455ph8/etfzw477ND0eAAMQOJA
P1HXdS699NKcfvrpWbBgQdPj9IqpU6fmK1/5Svbee++mRwFggLnuuuvytre9LTNnzmx6lF4xadKk
fO1rX8tRRx3V9CgADFBOK+gnqqrKqaeemosuuiiTJk1qepxN9vKXvzxf/epXhQEANosjjzwy3/jG
N7L//vs3Pcom23///fONb3wjRx55ZNOjADCAOXKgH3rkkUdyySWX5Ac/+EGuu+66psdZb+PGjctx
xx2XU089NSeccIKLEAKw2c2fPz//8z//k+985zu54YYb+s3RdyNHjszhhx+eU045JW94wxucfgfA
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
SUVORK5CYII=" />
</svg>

  <br />
  If the majority of the participants in the previous experiment picked a darker shade than the one currently presented in the square game,
  a rightward arrow will appear, as in the example above.
 
 `,
      },
      {
        title: "The Hints",
        text: `
 
  <br />
  Conversely, If the majority of the participants chose a brighter colour than the one currently presented, a leftward arrow will appear.
  
  <br /><br />
  Finally, if most participants chose the colour currently on display as their chosen mid-point, a checkmark would appear onscreen.
  
  
  `,
      },
      {
        title: "The Hints",
        text: `
  
  <br />
  Notice! The analysis of our past experiments indicated very high accuracy rates, so in most cases the hints presented to you are very.
  Nevertheless, the performance of past participants was not perfect, so in some cases the hints might be misleading.
  `,
      },
      {
        title: "",
        text: `
  <br />
  Now, a short practice will begin. All hints at this stage will be based on the results of our preliminary study - the smaller sample of five participants.
  To help you familiarize yourself with the interface of the hint, please press the “Press for hint” button on every trial. 
  Try pressing it in different time points and notice the different results.
  `,
      },
    ],
    isPractice: true,
    alertnessTestIndex: 3,
    numberOfTrials: 3,
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
  <br />
  Now, the final training phase will begin. It will be similar to the previous one, only with hints from the 107-participant study.
  `,
      },
    ],
    isPractice: true,
    numberOfTrials: 3,
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
  <br /><br />
  Now, the real task will begin. As in the practice phase, you are still requested to identify the mid-point of brightness continuums of different colours.
  From now on, your performance will be calculated towards your final results.
<br /><br />

  Please notice that there is no time limit for each trial (beyond our general requirement to take all trials in a row, without substantial breaks).
  Your performance will be evaluated based on accuracy, not on speed.
  `,
      },
      {
        title: "",
        text: `
		At the following phase, hints will be provided to you from time to time. 
		The hints will be delivered automatically, without request. Some will be based on the large sample, 
		while others on the small one. 
		<br /><br />
		Remember: hints from larger samples are of higher quality.
		`,
        isExperimental: true,
      },
    ],
    numberOfTrials: 20,
    hintCreator: function (isExperimental) {
      if (isExperimental) {
        return createHint({
          autoHintClicks: { min: 3, max: 7 },
          groups: [
            { size: 5, certainty: 0.8 },
            { size: 107, certainty: 1 },
          ],
        });
      }
      return createHint({});
    },
  }),
  // Phase 6
  createPhase({
    instructions: [
      {
        title: "Resting page",
        text: `
		<br />
		You may rest for a few seconds before proceeding.
		`,
      },
    ],
    numberOfTrials: 20,
    hintCreator: function (isExperimental) {
      if (isExperimental) {
        return createHint({
          autoHintClicks: { min: 3, max: 7 },
          groups: [
            { size: 5, certainty: 0.8 },
            { size: 107, certainty: 1 },
          ],
        });
      }
      return createHint({});
    },
  }),
  // Phase 7
  createPhase({
    instructions: [
      {
        title: "Hint Requesting Phase",
        text: `
  
  <br />
  In the following phase, you will be able to request hints by pressing a designated button, like in the practice phase. 
  However, now every time you press the button the screen will freeze, and you will be required to wait 10 seconds before the hint is revealed.
  <br /><br />
  On some trials you will be offered hints extracted from the larger sample (107 participants) and in others from the small sample (5 participants).
  You will know in advance what type of hint is offered to you. The type will be indicated by the number appearing on the button. 
  <br />
  Notice: Hint usage will not affect your results.
  `,
      },
    ],
    alertnessTestIndex: 15,
    numberOfTrials: 20,
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
        text: `
		<br />
		You may rest for a few seconds before proceeding.
		`,
      },
    ],
    numberOfTrials: 20,
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
        text: `
		You have completed the Colour Judgement Task.
		<br /><br />
		Now you will be presented with a short series of questions regarding your feelings, thoughts and habits. 
		Please read them carefully and attentively, and answer sincerely. 
				<br /><br />

		Press "Next" to continue. 
		
		`,
      },
    ],
  }),
];

export default phases;





