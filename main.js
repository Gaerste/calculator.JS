const displayNumber = document.querySelectorAll(".number");
const displayOperator = document.querySelectorAll(".operator");
const equalButton = document.getElementById("equal");
const valoresActuales = document.querySelector(".valores-actuales");
const clearAll = document.getElementById("C");
const deleteButton = document.getElementById("del");
const valoresPrevios = document.querySelector(".valores-previos");
const puntoNumber = document.getElementById("punto");

let operador1 = "";
let operador2 = "";
let operacion = "";
let operationString = "";

Array.from(displayNumber).forEach((number) => {
  number.addEventListener("click", function () {
    addNumber(number.value);
    actualizarDisplay();
  });
});

function addNumber(number) {
  operador1 += number;
}


Array.from(displayOperator).forEach((operator) => {
  operator.addEventListener("click", function () {
    if (operador1 === "") return;
    operador2 = operador1;
    operacion = operator.value;
    operador1 = "";
    // operator.value = operationString;
    valoresPrevios.innerHTML = `${operador2} ${operacion}`;
    // valoresActuales.innerHTML = "";
    actualizarDisplay();
  });
});

equalButton.addEventListener("click", function () {
  if (operador1 === "" || operador2 === "" || operacion === "") return;
  calculo();
  operador1 = "";
  operador2 = "";
  operacion = "";
  // valoresPrevios.innerHTML = "";
});

clearAll.addEventListener("click", function () {
  operador1 = "";
  operador2 = "";
  operacion = "";
  valoresPrevios.innerHTML = "";
  actualizarDisplay();
});

deleteButton.addEventListener("click", function () {
  operador1 = operador1.slice(0, -1);
  actualizarDisplay();
});

function calculo() {
  switch (operacion) {
    case "+":
      operador1 = parseFloat(operador2) + parseFloat(operador1);
      actualizarDisplay();
      break;
    case "-":
      operador1 = parseFloat(operador2) - parseFloat(operador1);
      actualizarDisplay();
      break;
    case "x":
      operador1 = parseFloat(operador2) * parseFloat(operador1);
      actualizarDisplay();
      break;
    case "/":
      operador1 = parseFloat(operador2) / parseFloat(operador1);
      actualizarDisplay();
      break;
  }
}

function actualizarDisplay() {
  // valoresPrevios.innerHTML = `${operador2} ${operacion} ${valoresActuales.innerHTML}`;
  valoresActuales.innerHTML = operador1;
}


function darkMode() {
  let mode = document.body;
  mode.classList.toggle("dark-mode");
}
