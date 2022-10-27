// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const selection = document.getElementById('horn-select');
  const expose = document.getElementById('expose');
  const exposeChildren = Array.from(expose.children);
  const image = exposeChildren.find(elm => elm.nodeName === 'IMG');
  const button = exposeChildren.find(elm => elm.nodeName === 'BUTTON');
  const audio = exposeChildren.find(elm => elm.nodeName === 'AUDIO');

  // Set image and audio file paths when option is selected
  selection.onchange = () => {
    const valueName = selection.options[selection.selectedIndex].value;
    image.setAttribute('src', `assets/images/${valueName}.svg`);
    audio.setAttribute('src', `assets/audio/${valueName}.mp3`);
  }

  // When "Play Sound" button clicked, play audio if available
  button.addEventListener('click', () => {
    audio.getAttribute('src') !== '' && audio.play();
  })

}