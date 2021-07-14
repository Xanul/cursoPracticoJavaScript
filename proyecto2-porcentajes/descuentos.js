// console.log({
//   precioOriginal,
//   descuento,
//   porcentajePrecioConDescuento,
//   precioConDescuento,
// });

function calcularPrecioConDescuento(precioOriginal, descuento) {
  let porcentajePrecioConDescuento = 100 - descuento;
  let precioConDescuento =
    (precioOriginal * porcentajePrecioConDescuento) / 100;

  return precioConDescuento;
}
