//instanciando a requisição
const xhr = new XMLHttpRequest();



//definindo o tipo de retorno padrão
xhr.responseType = 'json'

//primeira coisa a se fazer é, monitorar o estado da propriedade
//Toda vez que o estado mudar ele entra na condição abaixo 
//e retorna um console.log quando o estado for 4  eo status for 200
xhr.onreadystatechange = () => {
    let documento;

    if (xhr.readyState === 4 && xhr.status === 200) {
        //readyState = estado do objeto
        // alert('Funfou')
        documento = xhr.response;
        console.log(documento);
    } else {
        // alert('Deu ruim')
    }
}

//Configurando o tipo de ação retornada
xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts/1')

//Enviando a requisição
xhr.send()