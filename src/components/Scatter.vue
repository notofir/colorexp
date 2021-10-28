<template>
  <div>
    <svg
      v-show="elementVisible"
      class="hideElement"
      :viewBox="'0 0 ' + ((containerR + containerStrokeWidth) * 4).toString() + ' ' + ((containerR + containerStrokeWidth) * 2).toString()"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle v-for="(diff, index) in [0, gap]" :key="index" :cx="diff + containerR + ((1 + (index * 2)) * containerStrokeWidth)" :cy="containerR + containerStrokeWidth" :r="containerR + containerStrokeWidth" :stroke-width="containerStrokeWidth" stroke="white" fill="black" />
      <circle
        v-for="(circle, index) in getCircles()"
        :key="index"
        :cx="circle.x"
        :cy="circle.y"
        :r="circle.r"
        fill="blue"
      />
    </svg>
  </div>
</template>

<script>
import getRNG from "../seededrandom";

const width = window.innerWidth;
const height = window.innerHeight;

function getDistance(circle1, circle2) {
  var x = circle1.x - circle2.x;
  var y = circle1.y - circle2.y;
  return Math.sqrt(x * x + y * y);
}

function randomizeCircle(rng, containerR, innerR) {
  const distanceFromCenter = rng.getInt(containerR + 1 - innerR);
  const angle = rng.getInt(360); // Getting 360 is similar to 0.
  return {
    x: distanceFromCenter * Math.cos(angle),
    y: distanceFromCenter * Math.sin(angle),
    r: innerR,
  };
}

export default {
  name: "Scatter",
  props: {
    phaseIndex: Number,
    trialIndex: Number,
  },
  data() {
    let containerR = 25;
    let rng = getRNG("scatter", this.phaseIndex, this.trialIndex);
    let leftSize = 50;
    let rightSize = 50;
    let diff = 1 + rng.getInt(25) // Min size is 25, max size is 75.
    if (rng.getBool()) {
      diff *= -1;
    }

    if (rng.getBool()) {
      leftSize += diff;
    } else {
      rightSize += diff;
    }

    console.log(leftSize, rightSize, diff)
    return {
      rng: rng,
      containerStrokeWidth: 1,
      containerR: containerR,
      innerR: 2,
      gap: containerR * 2,
      elementVisible: true,
      stageSize: {
        width: width,
        height: height,
      },
      leftSize: leftSize,
      rightSize: rightSize,
    };
  },
  created() {
    setTimeout(() => {
      this.elementVisible = false;
      this.$emit("scatter-finish", this.leftSize, this.rightSize);
    }, 700);
  },
  emits: ["scatter-finish"],
  methods: {
    getCirclesWithRelativeCoordinates(n) {
      // Picking locations with help from https://www.youtube.com/watch?v=XATr_jdh-44
      var circles = [];
      while (circles.length < n) {
        let isOverlapping = false;
        let circle = randomizeCircle(this.rng, this.containerR, this.innerR);

        for (var i = 0; i < circles.length; i++) {
          var distance = getDistance(circle, circles[i]);
          if (distance < 2 * this.innerR) {
            isOverlapping = true;
            break;
          }
        }

        if (!isOverlapping) {
          circles.push(circle);
        }
      }

      return circles;
    },
    getCircles() {
      let leftCircles = this.getCirclesWithRelativeCoordinates(this.leftSize);
      let rightCircles = this.getCirclesWithRelativeCoordinates(this.rightSize);
      let all = [leftCircles, rightCircles]
      for (let i = 0; i < all.length; i++) {
        for (let j = 0; j < all[i].length; j++) {
          all[i][j].x += (1 + (2 * i) * this.containerStrokeWidth) + (i * this.gap) + this.containerR
          all[i][j].y += this.containerStrokeWidth + this.containerR
        }
      }

      return leftCircles.concat(rightCircles);
    }
  },
};
</script>

<style scoped></style>
