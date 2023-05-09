//funcion para calcular el costo total
function calcularCosto() {
  //declaracion de variables
  let costoTotal = 0;
  let mangas;
  let cantidad;

  //ciclo para repetir la pregunta
  while (mangas != 0) {
    mangas = parseInt(prompt(
      "Seleccione el producto que desea comprar\n1- Death Note 1 $2000\n2- Chainsaw Man 1 $2000\n3- Tokyo Revengers 1 $2000\n4- Jujutsu Kaisen 1 $2100\n0- Terminar"
    ));
    switch (mangas) {
      case 1:
        cantidad = parseInt(prompt("Ingrese la cantidad de unidades que desea comprar"));
        costoTotal += cantidad * 2000;
        break;
      case 2:
        cantidad = parseInt(prompt("Ingrese la cantidad de unidades que desea comprar"));
        costoTotal += cantidad * 2000;
        break;
      case 3:
        cantidad = parseInt(prompt("Ingrese la cantidad de unidades que desea comprar"));
        costoTotal += cantidad * 2000;
        break;
      case 4:
        cantidad = parseInt( prompt("Ingrese la cantidad de unidades que desea comprar"));
        costoTotal += cantidad * 2100;
        break;
    }
  }
  //Impresion del costo total
  alert("el costo total es de: $" + costoTotal);
}
calcularCosto();
