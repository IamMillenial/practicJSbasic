function credit (age, hasJob = false) {
    switch (true) {
        case age > 24 && hasJob:
            return 500;
        case age > 24:
            return 100;
        default:
            return 0;
    }
}
function canBuy(productPrise,age,money,hasJob = false) {
    const  creditMoney = credit(age,hasJob);
    return productPrise < money + creditMoney;
}

console.log(canBuy(2000,25,1000));

