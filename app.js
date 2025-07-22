const { createApp, ref, onMounted } = Vue;

createApp({
  setup() {
    const count = ref(0);
    const bounce = ref(false);
    const mouseX = ref(50);
    const mouseY = ref(50);
    const audio = new Audio("https://www.bensound.com/bensound-music/bensound-dubstep.mp3");
    const isPlaying = ref(false);

    const updateMouse = (e) => {
      mouseX.value = (e.clientX / window.innerWidth) * 100;
      mouseY.value = (e.clientY / window.innerHeight) * 100;
    };

    const increment = () => {
      count.value++;
      bounce.value = true;
    };

    const toggleMusic = () => {
      if (isPlaying.value) {
        audio.pause();
      } else {
        audio.play();
      }
      isPlaying.value = !isPlaying.value;
    };

    onMounted(() => {
      window.addEventListener("mousemove", updateMouse);
    });

    return {
      count,
      bounce,
      increment,
      mouseX,
      mouseY,
      toggleMusic,
      isPlaying,
    };
  },
  template: `
    <div class="app" @mousemove="updateMouse">
      <div class="aurora-background"
           :style="{ backgroundPosition: mouseX + '%' + ' ' + mouseY + '%' }"></div>
      <div class="starfield"></div>

      <h1 class="title">Aurora Pulse Counter</h1>
      <p class="developed-by">Developed by: Rizky</p>

      <div :class="['counter-circle', bounce ? 'bounce' : '']" @animationend="bounce = false">
        {{ count }}
      </div>

      <button class="count-button" @click="increment">Count</button>
      <button class="music-button" @click="toggleMusic">
        {{ isPlaying ? 'Pause Music' : 'Play Music' }}
      </button>
    </div>
  `
}).mount("#app");
