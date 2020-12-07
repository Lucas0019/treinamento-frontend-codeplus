//exercicio 02

//a função deve retornar o nome do pai de acordo com o nome de seu filho passado no segundo parâmetro 
//Exemplo: passei Pedro, deve retornar João Paulo

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

getParent = (list, children) => list.find(parent => parent.children == children).name


//Testando
const parent = getParent(parentList, 'Pedro')

console.log(parent)//João Paulo


