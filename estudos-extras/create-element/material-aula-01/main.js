//createElement & appendChild

// Buscar elemento pai
const elemento_pai = document.body;


const titulo = document.createElement('h1'); // Criar elemento
const texto = document.createTextNode("Um título qualquer");// Criar o nó de texto

titulo.appendChild(texto);// Anexar o nó de texto ao elemento h1
elemento_pai.appendChild(titulo);// Agora sim, inserir (anexar) o elemento filho (titulo) ao elemento pai (body)


//Outro exemplo
const info = document.createElement('p')
const showText = document.createTextNode('Sou um texto por acaso, um programador que desenvolver no back e front é um fullstack')

info.appendChild(showText)
elemento_pai.appendChild(showText)



//textContent

// Criar elemento
const frase = document.createElement('p');

// Criando o nó de texto de outra forma
frase.textContent = "Um título qualquer"

// Inserir (anexar) o elemento filho (titulo) ao elemento pai (body)
elemento_pai.appendChild(frase);




//Inserindo com insertBefore

// A função insertBefore insere um elemento antes (before) de um determinado elemento. 
// Por tanto, o uso desta função é indicado para trabalhar com listas, tabelas, itens, etc… ou seja, 
// elementos que representam uma listagem. Obviamente, você pode utilizá-la como bem entender.

// A função insertBefore() recebe dois argumentos. O primeiro é o nó a ser inserido. 
// O segundo argumento é o nó antes do qual esse nó vai ser inserido, exemplo:

// elemento_pai.insertBefore(novoElem, elemDeReferencia);

// Imagina que você quer inserir um item de uma lista (li) em uma lista (ul), seu HTML será mais ou menos isso…



// Criando o terceiro elemento
const novoElem = document.createElement('li');
var terceiroItem = document.createTextNode('terceiro item');
novoElem.appendChild(terceiroItem);


const lista = document.getElementsByTagName('ul')[0];// Recuperando a lista
const itens = document.getElementsByTagName('li');// Recuperando os itens

lista.insertBefore(novoElem, itens[2]);// Inserindo com insertBefore()
