//import { seedrandom } from "seedrandom";
const seedrandom = require("seedrandom");

// from 0 (inc.) to max (exc.).
function getRandomInt(rng, max) {
  return Math.floor(rng() * max);
}

function getRNG(seed) {
  return seedrandom(seed)
}

export { getRNG, getRandomInt };
