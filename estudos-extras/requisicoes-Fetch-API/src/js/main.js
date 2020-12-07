const cep = document.querySelector('#cep')

//Tratando e inserindo informações
const showData = (result) => {
    // armazenando cada informação no objeto campo
    for (const campo in result) {
        //Verificando somente os itens para o formato
        if (document.querySelector('#' + campo)) {
            // console.log(campo);
            document.querySelector('#' + campo).value = result[campo]
        }
    }
}

cep.addEventListener('blur', (evento) => {
    //irá trocar o traço  (-) e substitui por nada 
    let searchRemove = cep.value.replace('-', '')

    //Configurando o CORS
    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }

    //Acesse essa URL com as opções
    fetch(`https://viacep.com.br/ws/${searchRemove}/json/`, options)

        //Quando trabalhamos com fetch ele retorna uma promisse
        //Tratativa pŕévia de erro

        //SE der certo
        .then(response => {
            response.json()//Retorna a resposta em formato JSON
                .then(data => showData(data))
        })

        //SE der Errado
        .catch(evento => console.log('Deu erro: ' + evento.message))
})