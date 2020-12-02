"use strict";

var _api = _interopRequireDefault(require("./api.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function printProducts(_ref) {
  var item = _ref.item;
  var $productList = document.querySelector('.product-list');
  var $comprasTotal = document.querySelector('.container__total');
  item.forEach(function (_ref2) {
    var name = _ref2.name,
        image = _ref2.image,
        quantity = _ref2.quantity,
        bestPriceFormated = _ref2.bestPriceFormated;
    var products = document.createElement('li');
    products.innerHTML = "\n      <div class=\"product-item\">\n        <picture>\n          <img src=\"".concat(image, "\"/>\n        </picture>\n        <div>\n          <header>\n            <span class=\"product-item__name\">").concat(name, "</span>\n          </header>\n          <footer>\n            <div>\n              <span class=\"product-item__quantity\">Qtd.: ").concat(quantity, "</span>\n            </div>\n            <div>\n              <span class=\"product-item__price\">").concat(bestPriceFormated, "</span>\n            </div>\n          </footer>\n        </div>\n      </div>\n    ");
    $productList.appendChild(products);
  });
  var totalPrice = (item.reduce(function (acc, _ref3) {
    var bestPrice = _ref3.bestPrice,
        quantity = _ref3.quantity;
    return acc + bestPrice * quantity;
  }, 0) / 100).toLocaleString('pt-BR', {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2
  });
  $comprasTotal.innerHTML = "Total do pedido: <span>".concat(totalPrice, "</span>");
}

var config = {
  method: 'GET',
  url: 'products.json',
  data: null
};
(0, _api["default"])(config, printProducts); //Neste exercício você deve imprimir na UL ".product-list" produtos seguindo o layout no README do gitbub: https://i.imgur.com/EbVlWpX.png
//Deve incluir a soma dos produtos
//O botão finalizar compra deve ter o href de "/checkout"