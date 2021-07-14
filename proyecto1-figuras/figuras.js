// @ts-check

// Código del cuadrado
function perimetroCuadrado(lado) {
  return lado * 4;
}

function areaCuadrado(lado) {
  return lado * lado;
}
// Codigo del triangulo
function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}

function alturaTriangulo(lado1, lado2, base) {
  if (lado1 == lado2) {
    let alturTriangulo = Math.sqrt(Math.pow(lado1, 2) - Math.pow(base, 2) / 4);
    return alturTriangulo;
  } else {
    alert("El triangulo introducido no es correcto");
  }
}

function areaTriangulo(lado1, lado2, base) {
  let altura = alturaTriangulo(lado1, lado2, base);
  return (base * altura) / 2;
}

// Código del círculo

// Diametro
function diametroCirculo(radio) {
  return radio * 2;
}

// PI
const PI = Math.PI;

// Circunferencia
function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}

// Área
function areaCirculo(radio) {
  return radio * radio * PI;
}

// Aqui interactuamos con HTML

function calularPerimetroCuadrado() {
  const input = document.getElementById("inputCuadrado");
  const value = input.value;
  const perimetro = perimetroCuadrado(value);
  alert("El perimetro del cuadrado es: " + perimetro);
}

function calcularAreaCuadrado() {
  const input = document.getElementById("inputCuadrado");
  const value = input.value;
  const perimetro = areaCuadrado(value);
  alert("El area del cuadrado es: " + perimetro);
}

function calcularPerimetroTriangulo() {
  const input1 = document.getElementById("inputTriangulo1");
  const value1 = parseInt(input1.value);

  const input2 = document.getElementById("inputTriangulo2");
  const value2 = parseInt(input2.value);

  const input3 = document.getElementById("inputTriangulo3");
  const value3 = parseInt(input3.value);

  const perimetroTri = perimetroTriangulo(value1, value2, value3);
  alert("El perimetro del triangulo es: " + perimetroTri);
}

function calcularAreaTriangulo() {
  const input1 = document.getElementById("inputTriangulo1");
  const value1 = parseInt(input1.value);

  const input2 = document.getElementById("inputTriangulo2");
  const value2 = parseInt(input2.value);

  const input3 = document.getElementById("inputTriangulo3");
  const value3 = parseInt(input3.value);

  const areaTri = areaTriangulo(value1, value2, value3);
  alert("El area del triangulo es: " + areaTri);
}

function calcularDiametroCirculo() {
  const input = document.getElementById("inputCirculo");
  const value = parseInt(input.value);
  const diametroCir = diametroCirculo(value);
  alert(diametroCir);
}

function calcularCircunferenciaCirculo() {
  const input = document.getElementById("inputCirculo");
  const value = parseInt(input.value);
  const circu = perimetroCirculo(value);
  alert(circu);
}

function calcularAreaCirculo() {
  const input = document.getElementById("inputCirculo");
  const value = parseInt(input.value);
  const areaCir = areaCirculo(value);
  alert(areaCir);
}
