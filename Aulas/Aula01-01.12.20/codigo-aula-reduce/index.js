const prices = [120, 3000, 1800, 900, 9856, 7000, 450, 332];

const totalPrice = prices.reduce((acc, number) => {
    return acc + number;
}, 0)

console.log(totalPrice);