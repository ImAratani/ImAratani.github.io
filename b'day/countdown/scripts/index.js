const count = document.getElementById('count');
const head = document.getElementById('head');

const config = {
  birthdate: 'Jun 23, 2023',
  name: 'Usuario'
};

const second = 1000,
  minute = second * 60,
  hour = minute * 60,
  day = hour * 24;

// Obtén la diferencia horaria entre la zona horaria actual y la de España (en minutos)
const timeZoneOffset = new Date().getTimezoneOffset();

let countDown = new Date(`${config.birthdate} 00:00:00`).getTime() - timeZoneOffset * minute;
let x = setInterval(function() {
  let now = new Date().getTime() - timeZoneOffset * minute,
    distance = countDown - now;

  document.getElementById('day').innerText = Math.floor(distance / day);
  document.getElementById('hour').innerText = Math.floor(
    (distance % day) / hour
  );
  document.getElementById('minute').innerText = Math.floor(
    (distance % hour) / minute
  );
  document.getElementById('second').innerText = Math.floor(
    (distance % minute) / second
  );
}, second);

