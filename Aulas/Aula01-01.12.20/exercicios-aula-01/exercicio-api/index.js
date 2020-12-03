//Importando a API
import api from './api.js'


// Função para criar um <li></li> no produto
function printProducts({ item }) {
  const $listaProdutos = document.querySelector('.product-list');
  const $valorTotal = document.querySelector('.container__total');


  //Buscando na products.json
  item.forEach(({ name, image, quantity, bestPriceFormated }) => {

    //O createElement() cria o elemento HTML especificado 
    const produtos = document.createElement('li');
    produtos.innerHTML = `
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

    //Adiciona um nó ao final da lista de filhos de um nó pai especificado
    $listaProdutos.appendChild(produtos);
  });


  //Calculando o valor final
  const totalPrice = (item.reduce((acc, { bestPrice, quantity }) => acc + (bestPrice * quantity), 0) / 100).toLocaleString('pt-BR', { style: "currency", currency: "BRL", minimumFractionDigits: 2 });

  $valorTotal.innerHTML = `Total do pedido: <span>${totalPrice}</span>`;
}


// Configurando para coletar as informações do arquivo JSON
const config = {
  method: 'GET',
  url: 'products.json',
  data: null,
}


api(config, printProducts);

