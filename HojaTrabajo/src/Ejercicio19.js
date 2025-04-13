let num1 = 12;
let num2 = 3;
let operacion = '+';
let resultado;

if (operacion === '+') {
  resultado = num1 + num2;
} else if (operacion === '-') {
  resultado = num1 - num2;
} else if (operacion === '*') {
  resultado = num1 * num2;
} else if (operacion === '/') {
  resultado = num2 !== 0 ? num1 / num2 : "División por cero";
} else {
  resultado = "Operación no válida";
}

console.log("Resultado:", resultado);
