let mes = 'abril';

switch (mes) {
  case 'abril':
  case 'junio':
  case 'septiembre':
  case 'noviembre':
    console.log("30 días");
    break;
  case 'enero':
  case 'marzo':
  case 'mayo':
  case 'julio':
  case 'agosto':
  case 'octubre':
  case 'diciembre':
    console.log("31 días");
    break;
  case 'febrero':
    console.log("28 días");
    break;
  default:
    console.log("Yo no soy válido");
}
