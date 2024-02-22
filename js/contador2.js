document.addEventListener('DOMContentLoaded', function() {
    const lcdDisplay = document.getElementById('lcd1');
    const startButton1 = document.getElementById('startButton1');
    const duracionHora = 7200000; // 2 horas en milisegundos
  
    function formatTime(milliseconds) {
      const hours = Math.floor(milliseconds / 3600000);
      const minutes = Math.floor((milliseconds % 3600000) / 60000);
      const seconds = Math.floor((milliseconds % 60000) / 1000);
      return `${hours}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }
  
    function updateLCD(milliseconds) {
      lcdDisplay.innerHTML = `Tiempo restante: ${formatTime(milliseconds)}`;
    }
  
    startButton1.addEventListener('click', function() {
      this.disabled = true;
      let tiempoInicio = Date.now();
      let timerInterval = setInterval(function() {
        const tiempoTranscurrido = Date.now() - tiempoInicio;
        const tiempoRestante = duracionHora - tiempoTranscurrido;
        if (tiempoRestante > 0) {
          updateLCD(tiempoRestante);
        } else {
          clearInterval(timerInterval);
          updateLCD(0);
          lcdDisplay.innerHTML += '<br>Completado';
          startButton1.disabled = false;
        }
      }, 1000);
    });
  });