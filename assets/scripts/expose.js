// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const selection = document.getElementById('horn-select');
  const expose = document.getElementById('expose');
  const exposeChildren = Array.from(expose.children);
  const button = exposeChildren.find(elm => elm.nodeName === 'BUTTON');
  const volumeControls = document.getElementById('volume-controls');
  const horn = {
    name: '',
    image: exposeChildren.find(elm => elm.nodeName === 'IMG'),
    audio: exposeChildren.find(elm => elm.nodeName === 'AUDIO'),
  }
  const volume = {
    range: document.getElementById('volume'),
    icon: Array.from(volumeControls.children).find(elm => elm.nodeName === 'IMG'),
  }
  const jsConfetti = new JSConfetti();

  // Set image and audio file paths when option is selected
  selection.onchange = () => {
    horn.name = selection.options[selection.selectedIndex].value;
    horn.image.setAttribute('src', `assets/images/${horn.name}.svg`);
    horn.audio.setAttribute('src', `assets/audio/${horn.name}.mp3`);
  }

  // When "Play Sound" button clicked, play audio if available
  button.addEventListener('click', () => {
    horn.audio.getAttribute('src') !== '' && horn.audio.play();
    if (horn.name === 'party-horn') {
      jsConfetti.addConfetti();
    }
  })

  // Volume icon updates as scroll bar changes
  volume.range.oninput = (e) => {
    volume.icon.setAttribute('src', `assets/icons/volume-level-${rangeToLevel(volume.range.value)}.svg`);
    horn.audio.volume = volume.range.value / 100;
  }
}

function rangeToLevel(value) {
  if (value == 0) {
    return 0;
  } else if (value < 33) {
    return 1;
  } else if (value < 67) {
    return 2;
  }
  return 3;
}