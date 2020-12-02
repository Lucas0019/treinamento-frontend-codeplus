//exercicio 02
//a função deve retornar o nome do pai de acordo com o nome de seu filho passado no segundo parâmetro 
//Exemplo: passei Clarice, deve retornar Marcos Maia

const parentList = [
    {
        name: "Marcos Maia",
        children: "Clarice",
    },
    {
        name: "João Paulo",
        children: "Pedro",
    },
    {
        name: "Fernanda",
        children: "Rosa",
    },
    {
        name: "Patricia",
        children: "Ana",
    },
    {
        name: "Lucas",
        children: "Samira",
    },

]

function getParent(list, children) {
    return
}

const parent = getParent(parentList, 'Pedro')

console.log(parent)

