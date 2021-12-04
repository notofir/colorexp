<template>
  <div v-if="side === 'correct'" style="padding-top: 0.25vh">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="6vw"
      height="6vh"
      fill="currentColor"
      class="bi bi-check-circle"
      viewBox="0 0 16 16"
    >
      <path
        d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
      />
      <path
        d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"
      />
    </svg>
    <div class="large-text">
      {{ size }}
    </div>
  </div>
  <div
    v-else-if="side === 'right'"
    style="display: flex; height: 100%; width: 100%"
  >
    <div style="flex: 50%; justify-content: center; text-align: center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="auto"
        height="7vh"
        fill="currentColor"
        class="bi bi-people-fill"
        viewBox="0 0 16 16"
      >
        <path
          d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
        />
        <path
          fill-rule="evenodd"
          d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"
        />
        <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
      </svg>
      <br />
      <div class="large-text">
        {{ size }}
      </div>
    </div>
    <div style="flex: 50%; text-align: left">
      <div style="height: 5%"></div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="5vw"
        height="4.5vh"
        fill="currentColor"
        class="bi bi-arrow-right"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
        />
      </svg>
    </div>
  </div>
  <div v-else class="row">
    <div style="flex: 50%; text-align: right">
      <div style="height: 5%"></div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="5vw"
        height="4.5vh"
        fill="currentColor"
        class="bi bi-arrow-right"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
        />
      </svg>
    </div>
    <div style="flex: 50%; justify-content: center; text-align: center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="auto"
        height="7vh"
        fill="currentColor"
        class="bi bi-people-fill"
        viewBox="0 0 16 16"
      >
        <path
          d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
        />
        <path
          fill-rule="evenodd"
          d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"
        />
        <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
      </svg>
      <br />
      <div class="large-text">
        {{ size }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DisplayedHint",
  props: {
    side: String,
    size: Number,
  },
};
</script>

<style></style>
