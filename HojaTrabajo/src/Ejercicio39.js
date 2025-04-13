function sumarArreglo(arreglo) {
    let suma = 0;
    for (let i = 0; i < arreglo.length; i++) {
      suma += arreglo[i];
    }
    return suma;
  }
  
  let arreglo = [];
  let continuar;
  
  do {
    let numero = Number(prompt("Ingresa un número:"));
    arreglo.push(numero);
    continuar = prompt("¿Deseas ingresar otro número? (sí/no)");
  } while (continuar.toLowerCase() === 'sí');
  
  let resultado = sumarArreglo(arreglo);
  console.log("Suma total:", resultado);
  