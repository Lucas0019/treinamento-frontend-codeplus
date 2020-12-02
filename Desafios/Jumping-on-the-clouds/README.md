# jumping on the Clouds

Uma garota está em um jogo onde ela tem que chegar até a última núvem. Ela pode pular de uma núvem para outra, ou pular de uma núvem para duas seguintes.
Sempre que puder, ela vai pular duas núvens, e, logo, irá contar com apenas um pulo. 

O desafio do jogo é que há algumas núvens com raio, e ela não pode pular nessas núvens. 

Ela precisa ganhar o jogo pulando a menor quantidade de núvens possíveis. 

No exemplo abaixo há 7 núvens: 2 com raios e 5 normais. 

no código, você receberá um array que compõe o cenário do game.

0 representa nuvens que ela PODE pular
1 representa nuvens que ela NÃO PODE pular

o array do cenário abaixo é: [0, 0, 1, 0, 0, 1, 0]. 4 pulos

![alt text](https://s3.amazonaws.com/hr-challenge-images/20832/1461134731-c258160d15-jump2.png)

neste outro caso, repare que ela pulou da núvem 0 para a núvem 2 mesmo que a núvem 1 estava disponível, isso porque ela sempre deve pular duas núvens quando possível. 

array: [0, 0, 0, 0, 1, 0]. 3 pulos

![alt text](https://s3.amazonaws.com/hr-challenge-images/20832/1461136358-764298d363-jump5.png)

A função jumpingOnClouds deve retornar a quantidade mínima de pulos que ela precisa dar para ganhar o jogo.

fonte: https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem