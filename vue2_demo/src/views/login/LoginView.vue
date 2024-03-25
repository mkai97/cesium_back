<template>
  <div
    class="login tw-flex tw-justify-center tw-items-center tw-w-full tw-h-screen tw-bg-gray-900 tw-text-6xl tw-text-center fw-bold"
  >
    {{ msg }}
  </div>
</template>

<script>
import anime from "animejs";
export default {
  name: "LoginView",
  data() {
    return {
      msg: "CESIUM DEMO",
    };
  },
  mounted() {
    anime({
      targets: ".login",
      translateX: 250,
      rotate: "3turn",
      backgroundColor: "#FFF",
      duration: 2200,
      easing: "easeInOutQuad",
    })
    setTimeout(() => {
     this.$router.push("/home");
    }, 2500);

  },
  methods: {},
};
</script>

<style>
</style>