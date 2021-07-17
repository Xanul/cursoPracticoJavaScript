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

function onClickButtonPriceDiscount(){
  let inputPrice = document.getElementById("inputPrice");
  let priceValue = inputPrice.value;
  let inputDiscount = document.getElementById("inputDiscount");
  let discountValue = inputDiscount.value;

  let finalPrice = calcularPrecioConDescuento(priceValue, discountValue);
  
  let resultP = document.getElementById("resultP");
  resultP.innerText = "El precio de tu producto con descuento es: $" + finalPrice;

}