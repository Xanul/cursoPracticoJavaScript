function calcularMediaAritmetica(arreglo) {
  sumaArreglo = arreglo.reduce(function (valorAcumulado = 0, nuevoElemento) {
    return valorAcumulado + nuevoElemento;
  });

  let promedioFinal = sumaArreglo / arreglo.length;

  return promedioFinal;
}

// Revisar el metodo Reduce en MDN
