// exercicio 03 

//exercicio 03

//A função deve adicionar as listas dentro da ul ".parent-list", contendo o nome do pai e da criança.
//ex: <li> Marcos Maia é pai de Clarice </li>
// Como o array tem 5 pais, deve adicionar 5 lis de acordo com exemplo acima. 
//dica: você pode usar o document.createElement('li') ou innerHTML;


const $parentList = document.querySelector('.parent-list');

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

function renderParentList(list) {
    console.log(list);
}

renderParentList(parentList)

