//c representa o cenario, mantenha o nome pra eu poder testar no hackerrank :D


const cenario1 = [0, 0, 1, 0, 0, 1, 0];
const cenario2 = [0, 0, 0, 0, 1, 0];

//São cenários criados por min para teste local
const cenario3 = [1, 0, 0, 1, 1, 0];
const cenario4 = [1, 1, 1, 1, 1, 1];
const cenario5 = [0, 0, 0, 0, 1, 0, 0, 0];


const jumpingOnClouds = c => {
    let n = 0;

    for (let i = 0; i < c.length - 1;) {
        i += (c[i + 2] ? 1 : 2);
        n++;
    }
    // console.log('💭 ' + n);

    //Para teste no hacker Rank descomente o código abaixo
    // return n;

}


//Testando
jumpingOnClouds(cenario1)//4
jumpingOnClouds(cenario2)//3

jumpingOnClouds(cenario3)//3
jumpingOnClouds(cenario4)//5
jumpingOnClouds(cenario5)//4





