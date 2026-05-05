document.addEventListener(
  "click",
  () => {
    const audio = document.getElementById("bgm");
    audio.volume = 0.6;
    audio.play();
  },
  { once: true },
);
