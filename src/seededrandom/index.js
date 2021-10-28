const seedrandom = require("seedrandom");

function getRNG(name, phase, trial) {
  const rng = seedrandom([name, phase.toString(), trial.toString()].join("-"));
  return {
    // from 0 (inc.) to max (exc.).
    getInt: function(max) {
      return Math.floor(rng() * max);
    },
    getEntry: function(array) {
      return array[this.getInt(array.length)];
    },
    getBool: function() {
      return rng() > 0.5;
    },
  };
}

export default getRNG;