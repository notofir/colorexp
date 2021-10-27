<template>
  <div>
    <svg
      v-show="elementVisible"
      class="hideElement"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <!-- Left circle -->
      <circle cx="25" cy="25" r="25" fill="black" />
      <circle
        v-for="(circle, index) in getCircles(25, 2, 50)"
        :key="index"
        :cx="25 + circle.x"
        :cy="25 + circle.y"
        :r="circle.r"
        fill="blue"
      />
      <!-- Right circle -->
      <circle cx="75" cy="25" r="25" fill="black" />
      <circle
        v-for="(circle, index) in getCircles(25, 2, 50)"
        :key="index"
        :cx="75 + circle.x"
        :cy="25 + circle.y"
        :r="circle.r"
        fill="blue"
      />
    </svg>
  </div>
</template>

<script>
import { getRNG, getRandomInt } from "../seededrandom";

const width = window.innerWidth;
const height = window.innerHeight;

function getDistance(circle1, circle2) {
  var x = circle1.x - circle2.x;
  var y = circle1.y - circle2.y;
  return Math.sqrt(x * x + y * y);
}

function randomizeCircle(rng, containerR, innerR) {
  const distanceFromCenter = getRandomInt(rng, containerR + 1 - innerR);
  const angle = getRandomInt(rng, 360); // Getting 360 is similar to 0.
  return {
    x: distanceFromCenter * Math.cos(angle),
    y: distanceFromCenter * Math.sin(angle),
    r: innerR,
  };
}

export default {
  name: "Scatter",
  props: {
    innerCircles: Number,
  },
  data() {
    return {
      rng: getRNG(42),
      elementVisible: true,
      stageSize: {
        width: width,
        height: height,
      },
      leftSize: 50,
      rightSize: 50,
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
    getCircles(containerR, innerR, n) {
      // Pick locations by https://www.youtube.com/watch?v=XATr_jdh-44
      var circles = [];
      while (circles.length < n) {
        let isOverlapping = false;
        let circle = randomizeCircle(this.rng, containerR, innerR);

        for (var i = 0; i < circles.length; i++) {
          var distance = getDistance(circle, circles[i]);
          if (distance < 2 * innerR) {
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
  },
};
</script>

<style scoped></style>
