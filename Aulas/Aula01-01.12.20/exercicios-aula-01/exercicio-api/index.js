import api from './api.js'

function printProducts({ item }) {
  const $productList = document.querySelector('.product-list');
  const $comprasTotal = document.querySelector('.container__total');

  item.forEach(({ name, image, quantity, bestPriceFormated }) => {
    const products = document.createElement('li');
    products.innerHTML = `
      <div class="product-item">
        <picture>
          <img src="${image}"/>
        </picture>
        <div>
          <header>
            <span class="product-item__name">${name}</span>
          </header>
          <footer>
            <div>
              <span class="product-item__quantity">Qtd.: ${quantity}</span>
            </div>
            <div>
              <span class="product-item__price">${bestPriceFormated}</span>
            </div>
          </footer>
        </div>
      </div>
    `;
    $productList.appendChild(products);
  });

  const totalPrice = (item.reduce((acc, { bestPrice, quantity }) => acc + (bestPrice * quantity), 0) / 100).toLocaleString('pt-BR', { style: "currency", currency: "BRL", minimumFractionDigits: 2 });
  $comprasTotal.innerHTML = `Total do pedido: <span>${totalPrice}</span>`;
}

const config = {
  method: 'GET',
  url: 'products.json',
  data: null,
}

api(config, printProducts);
//Neste exercício você deve imprimir na UL ".product-list" produtos seguindo o layout no README do gitbub: https://i.imgur.com/EbVlWpX.png
//Deve incluir a soma dos produtos
//O botão finalizar compra deve ter o href de "/checkout"
