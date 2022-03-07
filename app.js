'use strict';
//? ------ Data ------

const monto = document.getElementById('monto');
const interes = document.getElementById('interes');
const tiempo = document.getElementById('tiempo');
const opcion = document.getElementById('yearMonth');
const btnCalcular = document.getElementById('btn-calc');
const btnReset = document.getElementById('btn-reset');

let resultado = document.getElementById('result');

let resultadoInteres = 0;
let resultadoTiempo = 0;

//? ------ Funciones ------

btnCalcular.addEventListener('click', (e) => {
  e.preventDefault();

  resultadoTiempo = interestCalcTime(+tiempo.value, opcion.value);
  //* UI Update
  updateUI();
});

//? ------ Formula ------
//* 50000 * (39 / 100) / 12 * 3
//* 50000 * (0.39 / 12) * 3

const interestCalcTime = function (time, opcion) {
  let timeSelect = 1;
  let interesCalc = (monto.value * (+interes.value / 100)) / 12;
  if (opcion === 'year') timeSelect = 12;

  return +(interesCalc * (time * timeSelect)).toFixed(2);
};

const updateUI = function () {
  resultado.textContent = '';
  resultado.insertAdjacentHTML(
    'afterbegin',
    `<p id="montoInicial-label">Monto Inicial: $${monto.value}</p>
      <p id="interes-label">Total Interes: $${resultadoTiempo}</p>
      <p id="montoTotal-label">Monto Total: $${
        resultadoTiempo + Number(monto.value)
      }</p>`
  );
};

//* Clean UI
btnReset.addEventListener('click', (e) => {
  e.preventDefault();

  monto.value = tiempo.value = interes.value = '';
  resultado.textContent = '';
  resultado.insertAdjacentHTML(
    'afterbegin',
    `<p id="montoInicial-label">Monto Inicial: $0</p>
      <p id="interes-label">Total Interes: $0</p>
      <p id="montoTotal-label">Monto Total: $0</p>`
  );
});
