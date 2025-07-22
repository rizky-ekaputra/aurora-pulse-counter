const { createApp } = Vue;

createApp({
  data() {
    return {
      count: 0,
      bounce: false,
      mouseX: 50,
      mouseY: 50
    };
  },
  methods: {
    increment() {
      this.count++;
      this.bounce = true;
    },
    updateMouse(event) {
      const x = event.clientX / window.innerWidth;
      const y = event.clientY / window.innerHeight;
      this.mouseX = Math.floor(x * 100);
      this.mouseY = Math.floor(y * 100);
    }
  },
  mounted() {
    window.addEventListener("mousemove", this.updateMouse);
  },
  beforeUnmount() {
    window.removeEventListener("mousemove", this.updateMouse);
  }
}).mount("#app");