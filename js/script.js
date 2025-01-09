const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

function formatTime(time) {
    return time < 10 ? '0' + time : time;
}

function updateClock() {
    const now = new Date();

    horas.textContent = formatTime(now.getHours());
    minutos.textContent = formatTime(now.getMinutes());
    segundos.textContent = formatTime(now.getSeconds());
}

setInterval(updateClock, 1000);
updateClock(); 
