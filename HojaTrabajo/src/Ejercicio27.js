const NUMERO_SECRETO = Math.floor(Math.random() * 100) + 1;
console.log(`El número secreto es: ${NUMERO_SECRETO}`); // Para pruebas

let intento;
do {
  intento = Number(prompt("Adivina el número (1 al 100):"));
  if (intento !== NUMERO_SECRETO) {
    console.log("Sigue intentando...");
  }
} while (intento !== NUMERO_SECRETO);

console.log("¡Adivinaste!");
