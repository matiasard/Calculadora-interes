'use strict';
//* Data

const monto = document.getElementById('monto');
const interes = document.getElementById('interes');
const tiempo = document.getElementById('tiempo');
const btnCalcular = document.getElementById('btn-calc');
const opcion = document.getElementById('yearMonth');
const btnReset = document.getElementById('btn-reset');

let resultado = document.getElementById('result');

let resultadoInteres = 0;
let resultadoTiempo = 0;
//* Funciones

btnCalcular.addEventListener('click', (e) => {
  e.preventDefault();

  resultadoInteres = interestCalc(+monto.value, +interes.value);
  console.log(resultadoInteres);
  // console.log(+resultadoInteres.toFixed(2));

  resultadoTiempo = interestCalcTime(
    resultadoInteres,
    +tiempo.value,
    opcion.value
  );
  console.log(resultadoTiempo);
  // console.log(+resultadoTiempo.toFixed(2));

  //* UI Update
  updateUI();
});

// Formula
//* 50000 * (39 / 100) / 12 * 3
//* 50000 * (0.39 / 12) * 3

const interestCalc = function (monto, interes) {
  return (monto * (interes / 100)) / 12;
};

const interestCalcTime = function (interes, time, opcion) {
  let timeSelect = 0;
  opcion === 'year' ? (timeSelect = 12) : (timeSelect = 1);

  return +(interes * (time * timeSelect)).toFixed(2);
};

//* Monto: Incial +monto.value
//* Interes: resultadoTiempo
//* Monto Total: +monto.value + resultadoTiempo

const updateUI = function () {
  resultado.insertAdjacentHTML(
    'afterbegin',
    `<p id="montoInicial-label">Monto Inicial: $${monto.value}</p>
      <p id="interes-label">Total Interes: $${resultadoTiempo}</p>
      <p id="montoTotal-label">Monto Total: $${
        resultadoTiempo + Number(monto.value)
      }</p>`
  );
};

btnReset.addEventListener('click', (e) => {
  e.preventDefault();

  monto.value = tiempo.value = interes.value = '';
});
