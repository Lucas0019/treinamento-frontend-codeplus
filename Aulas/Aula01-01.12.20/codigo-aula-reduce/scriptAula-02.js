const productName = 'Notebook Samsung, Intel® Core™ i7, 16GB, 256GB SSD, Tela de 15”, Style S51 Pro - NP900X5T-XW1BR - SGNP900X5TXW1_PRD'

function limitName(name, max) {
    const newName = [...name].reduce((acc, letter, index) => {
        if (index === max) return acc + '...';
        if (index > max) return acc;
        return acc + letter;
    }, '')

    return newName;
}

const limitedName = limitName(productName, 50)

console.log(limitedName);