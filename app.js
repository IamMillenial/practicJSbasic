const prices =[[100, 200], [120, 100], [200, 350]];

const positivePrices = prices.filter(price => {
        return (price[1]-price[0]) > 0
    })
    .map(positivePrices => positivePrices[1] - positivePrices[0])

console.log(positivePrices);