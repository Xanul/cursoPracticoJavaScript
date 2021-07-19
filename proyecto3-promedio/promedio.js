// Objetos y arreglos de prueba
const lista1 = [1, 2, 3, 1, 2, 3, 4, 2, 2, 2, 1];
const lista2 = [2, 2, 3, 4, 5, 5, 5, 5, 6, 1, 2, 4, 7, 8, 9, 10, 4];
const lista3 = [10, 8, 7];
const objeto1 = [
  {
    materia: "Matematicas",
    creditos: 2,
    calificacion: 10,
  },
  {
    materia: "Programacion",
    creditos: 5,
    calificacion: 8,
  },
  {
    materia: "Historia",
    creditos: 5,
    calificacion: 7,
  },
];

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

function calcularMediana(arreglo) {
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

  return (
    "El numero de la lista que mas se repite es: " +
    arrayObj[arrayObj.length - 1][0] +
    " y se repite " +
    arrayObj[arrayObj.length - 1][1] +
    " veces"
  );
}

// Funcion calculo de promedio ponderado
function calcularPromedioPonderado(arregloObjetos) {
  let sumaDeElementos = arregloObjetos.map(function (elementoDelArreglo) {
    return elementoDelArreglo.creditos * elementoDelArreglo.calificacion;
  });

  let sumaArreglo = 0;
  for (let i = 0; i < sumaDeElementos.length; i++) {
    sumaArreglo += sumaDeElementos[i];
  }

  let sumaCreditos = 0;
  for (let i = 0; i < arregloObjetos.length; i++) {
    sumaCreditos = sumaCreditos + arregloObjetos[i].creditos;
  }

  console.log(sumaDeElementos);
  console.log(sumaArreglo);
  console.log(sumaCreditos);

  return sumaArreglo / sumaCreditos;
}
