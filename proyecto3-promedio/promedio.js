// Arreglo de prueba
const lista1 = [1, 2, 3, 1, 2, 3, 4, 2, 2, 2, 1];
const lista2 = [2, 2, 3, 4, 5, 5, 5, 6, 1, 2, 4, 7, 8, 9, 10, 4];

// Funcion calculo de promedio
function calcularMediaArtimetica(arreglo) {
  let sumaArreglo = arreglo.reduce(
    (acumulado, valorActual) => acumulado + valorActual
  );

  let promedioFinal = sumaArreglo / arreglo.length;

  return promedioFinal;
}

// Funcion calculo de mediana
// Primero se ordenan los elementos del arreglo de menor a mayor
function ordenarNumeros(arreglo) {
  let aux;

  for (let i = 0; i < arreglo.length; i++) {
    for (let k = 0; k < arreglo.length; k++) {
      if (arreglo[k] > arreglo[k + 1]) {
        aux = arreglo[k];
        arreglo[k] = arreglo[k + 1];
        arreglo[k + 1] = aux;
      }
    }
  }
}

function calculoMediana(arreglo) {
  ordenarNumeros(arreglo);

  if (arreglo.length % 2 == 0) {
    let numeroEnmedio1 = arreglo.length / 2 - 1;
    let numeroEnmedio2 = arreglo.length / 2;
    let sumaMediana = arreglo[numeroEnmedio1] + arreglo[numeroEnmedio2];
    return sumaMediana / 2;
  } else {
    let posicionEnmedio = parseInt(arreglo.length / 2);
    let numeroEnmedio = arreglo[posicionEnmedio];
    return numeroEnmedio;
  }
}

// Funcion calculo de moda
function calcularModa(arreglo) {
  let listaObj = {};

  arreglo.map(function (elemento) {
    if (listaObj[elemento]) {
      listaObj[elemento] += 1;
    } else {
      listaObj[elemento] = 1;
    }
  });

  let arrayObj = Object.entries(listaObj);

  arrayObj.sort((a, b) => a[1] - b[1]);

  return arrayObj;

  // return (
  //   "El numero de la lista que mas se repite es: " +
  //   arrayObj[arrayObj.length - 1][0] +
  //   " y se repite " +
  //   arrayObj[arrayObj.length - 1][1] +
  //   " veces"
  // );
}

// let lista1Array = Object.entries(lista1Count);

// lista1Array.sort(function (a, b) {
//   return a[1] - b[1];
// });

// let moda = lista1Array[lista1Array.length - 1][0];
