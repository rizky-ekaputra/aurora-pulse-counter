const { createApp } = Vue;

createApp({
  data() {
    return {
      count: 0,
      bounce: false,
      mouseX: 0,
      mouseY: 0,
    };
  },
  methods: {
    increment() {
      this.count++;
      this.bounce = true;
    },
    updateMouse(e) {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const offsetX = (e.clientX - centerX) * 0.02;
      const offsetY = (e.clientY - centerY) * 0.02;
      this.mouseX = offsetX;
      this.mouseY = offsetY;
    },
  },
}).mount('#app');
