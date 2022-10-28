// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const speechSynthesis = window.speechSynthesis;
  const voiceSelect = document.getElementById('voice-select');

  // Added all speech options
  speechSynthesis.addEventListener('voiceschanged', (e) => {
    speechSynthesis.getVoices().forEach(voice => {
      const option = document.createElement('option');
      option.textContent = `${voice.name} (${voice.lang})`;

      option.setAttribute('data-lang', voice.lang);
      option.setAttribute('data-name', voice.name);
      voiceSelect.appendChild(option);
    });
  })

}