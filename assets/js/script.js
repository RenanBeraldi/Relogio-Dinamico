"use strict";

const horas = document.querySelector("#horas");
const minutos = document.querySelector("#minutos");
const segundos = document.querySelector("#segundos");

const relogio = setInterval(function time() {
  let dateToday = new Date();
  let hr = dateToday.getHours();
  let min = dateToday.getMinutes();
  let sec = dateToday.getSeconds();

  let background =
    hr > 6 && hr < 10
      ? "linear-gradient(120deg, #efeebc 0%, #61d0cf 100%)"
      : hr >= 10 && hr < 15
      ? "linear-gradient(120deg, #fda65a 0%, #ffe467 100%)"
      : hr >= 15 && hr < 18
      ? "linear-gradient(120deg, #ca5a92 0%, #f4896b 100%)"
      : hr >= 18 && hr < 21
      ? "linear-gradient(120deg, #192861 0%, #372074 100%)"
      : "linear-gradient(120deg, #040b3c 0%, #233072 100%)";

  if (hr < 10) hr = "0" + hr;
  if (min < 10) min = "0" + min;
  if (sec < 10) sec = "0" + sec;

  horas.textContent = hr;
  minutos.textContent = min;
  segundos.textContent = sec;
  document.body.style.backgroundImage = background;
});
