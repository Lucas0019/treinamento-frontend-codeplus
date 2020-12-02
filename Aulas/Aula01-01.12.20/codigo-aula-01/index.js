import api from './api.js'

const devs = ['Galego', 'Na', 'Lindo', 'Parça', 'Xara', 'Bahia', 'Baqueta', 'Pablito'];
const $devList = document.querySelector('.dev-list');

function listDevs() {
    devs.forEach(function (dev) {
        const newLi = document.createElement('li');
        newLi.innerText = dev;

        newLi.addEventListener('click', function (event) {
            newLi.style.color = 'red'
        })

        $devList.appendChild(newLi);
    })

    // const $devListItem = document.querySelectorAll('.dev-list__item');

    // $devListItem.forEach($dev => {
    //   $dev.addEventListener('click', () => {
    //     $dev.style.color = 'red';
    //   })
    // })
}

// listDevs();

const config = {
    method: 'GET',
    url: 'products.json',
    data: null
}

// function getProducts(productList){
//   console.log(productList)
// }

api(config, productList => {
    console.log(productList)
});