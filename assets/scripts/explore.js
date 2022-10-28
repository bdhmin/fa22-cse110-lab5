// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const speechSynthesis = window.speechSynthesis;
  const voiceSelect = document.getElementById('voice-select');
  let voices = [];
  const explore = document.getElementById('explore');
  const exploreChildren = Array.from(explore.children);
  const button = exploreChildren.find(elm => elm.nodeName === 'BUTTON');
  const face = exploreChildren.find(elm => elm.nodeName === 'IMG');

  // Added all speech options
  speechSynthesis.addEventListener('voiceschanged', (e) => {
    voices = speechSynthesis.getVoices();
    voices.forEach(voice => {
      const option = document.createElement('option');
      option.textContent = `${voice.name} (${voice.lang})`;
      option.setAttribute('data-lang', voice.lang);
      option.setAttribute('data-name', voice.name);
      voiceSelect.appendChild(option);
    });
  });

  // When button is clicked face speaks
  button.addEventListener('click', () => {
    const text = document.getElementById('text-to-speak');
    const voice = voices[voiceSelect.selectedIndex-1];
    const utterance = new SpeechSynthesisUtterance(text.value);
    utterance.voice = voice;
    face.setAttribute('src', 'assets/images/smiling-open.png');
    speechSynthesis.speak(utterance);
    utterance.addEventListener('end', () => {
      face.setAttribute('src', 'assets/images/smiling.png');
    });
  });

}