let currentAudio = null;

document.addEventListener("keydown", function (event) {
  let audio = document.getElementById(event.keyCode);
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }
  audio && audio.play();
  currentAudio = audio;
});

const iconItems = document.querySelectorAll(".icon-item");
const audioItems = document.querySelectorAll(".audio-item");
for (let i = 0; i < iconItems.length; i++) {
  iconItems[i].addEventListener("click", () => {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }
    audioItems[i].play();
    currentAudio = audioItems[i];
  });
}
