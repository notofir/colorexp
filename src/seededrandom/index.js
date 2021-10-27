const seedrandom = require("seedrandom");

function getRNG(seed) {
  const rng = seedrandom(seed);
  return {
    // from 0 (inc.) to max (exc.).
    getInt: function(max) {
      return Math.floor(rng() * max);
    },
    getBool: function() {
      return rng() > 0.5;
    }
  };
}

export default getRNG;
