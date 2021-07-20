const salariosCol = colombia.map(function (persona) {
  return persona.salary;
});

salariosCol.sort((a, b) => a - b);

function esPar(numerito) {
  return numerito % 2 == 0;
}

function medianaSalarios(lista) {
  const mitad = parseInt(lista.length / 2);

  if (esPar(lista.length)) {
    let mediana = (lista[mitad] + lista[mitad - 1]) / 2;
    return mediana;
  } else {
    return lista[mitad];
  }
}

function topTen(arreglo) {
  let indexTopTen = Math.round(arreglo.length * 0.1);
  let aux2 = indexTopTen;
  let sumaSalarios = 0;
  let aux = arreglo.length - 1;

  while (indexTopTen > 0) {
    sumaSalarios += arreglo[aux];
    aux--;
    indexTopTen--;
  }
  return sumaSalarios / aux2;
}
