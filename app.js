'use strict';
//* Data

const monto = document.getElementById('monto');
const interes = document.getElementById('interes');
const tiempo = document.getElementById('tiempo');
const btnCalcular = document.getElementById('btn-calc');
const opcion = document.getElementById('yearMonth');
const resultado = document.getElementById('result');
console.log(resultado);

let resultadoInteres = 0;
let resultadoTiempo = 0;
//* Funciones

btnCalcular.addEventListener('click', (e) => {
  e.preventDefault();

  resultadoInteres = interestCalc(+monto.value, +interes.value);
  console.log(resultadoInteres);
  console.log(+resultadoInteres.toFixed(2));

  resultadoTiempo = interestCalcTime(
    resultadoInteres,
    +tiempo.value,
    opcion.value
  );
  console.log(resultadoTiempo);
  console.log(+resultadoTiempo.toFixed(2));
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
  return interes * (time * timeSelect);
};

//* Monto: Incial +monto.value
//* Interes: resultadoTiempo
//* Monto Total: +monto.value + resultadoTiempo
