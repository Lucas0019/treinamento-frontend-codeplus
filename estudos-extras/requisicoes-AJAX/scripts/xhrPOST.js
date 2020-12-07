const xhr = new XMLHttpRequest();


//Dados JSON para teste
const dadosDocumento = {

    "userId": 200,
    "id": 12,
    "title": "Aprendendo a usar AJAX (xhr)",
    "body": "Vai ter muita prática para entender isso"
}


//Configurando o eventos
xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
        console.log(xhr);
    }
}


xhr.open('POST', 'https://jsonplaceholder.typicode.com/posts')

//Status 201 representa criado
xhr.send(dadosDocumento)