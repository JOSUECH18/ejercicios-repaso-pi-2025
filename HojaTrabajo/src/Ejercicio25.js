let opcion;
do {
  opcion = prompt("Selecciona una opción:\nA: Bienvenid@\nB: Ingresar nombre\n3: Salir");

  if (opcion === "A") {
    console.log("Bienvenid@");
  } else if (opcion === "B") {
    let nombreIngresado = prompt("Ingresa tu nombre:");
    console.log(`Bienvenid@ ${nombreIngresado}`);
  }
} while (opcion !== "3");
