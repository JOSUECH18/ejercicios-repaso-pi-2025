const nombres = ['Ana', 'Carlos', 'Pedro', 'Lucía'];
let encontrado = false;

for (let i = 0; i < nombres.length; i++) {
  if (nombres[i] === 'Lucía') {
    encontrado = true;
    break;
  }
}

console.log(encontrado ? "Nombre encontrado" : "Nombre no encontrado");
