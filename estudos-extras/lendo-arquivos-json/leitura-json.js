//Executando a leitura de um arquivo JSON via JavaScript (NODE)

//Importando os dados para leitura
const { produto, marca, cor } = require('./dados.json')

console.log(`O Produto é um ${produto}, da marca ${marca} e tem a cor ${cor}`);