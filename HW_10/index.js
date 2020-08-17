document.addEventListener('keydown', function (event) {
  let key = document.getElementById(event.keyCode)
  key && key.play()
})

const iconItems = document.querySelectorAll('.icon-item')
const audioItems = document.querySelectorAll('.audio-item')
for (let i = 0; i < iconItems.length; i++) {
  iconItems[i].addEventListener('click', () => {audioItems[i].play()})
}

