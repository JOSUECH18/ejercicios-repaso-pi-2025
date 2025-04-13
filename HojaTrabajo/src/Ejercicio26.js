const numeros = [10, 15, 20, 25, 30, 5];
let suma = 0;
let contador = 0;

while (suma < 100 && contador < numeros.length) {
  suma += numeros[contador];
  contador++;
}

console.log("Suma total: " + suma);
console.log("Números usados: " + contador);
