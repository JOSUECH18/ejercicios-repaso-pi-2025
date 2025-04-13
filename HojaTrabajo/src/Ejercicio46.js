const notas = [80, 90, 70, 100];

const suma = notas.reduce((acum, actual) => acum + actual, 0);
const promedio = suma / notas.length;

console.log("Promedio de notas:", promedio);
