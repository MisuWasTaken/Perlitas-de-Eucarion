const audio = document.getElementById('musicaFondo');

const tiempoGuardado = localStorage.getItem('musicaTiempo');
if (tiempoGuardado) {
  audio.currentTime = parseFloat(tiempoGuardado);
}

audio.play().catch(() => {
  
  document.addEventListener('click', () => {
    audio.play();
  }, { once: true });
});

setInterval(() => {
  localStorage.setItem('musicaTiempo', audio.currentTime);
}, 500);

window.addEventListener('beforeunload', () => {
  localStorage.setItem('musicaTiempo', audio.currentTime);
});