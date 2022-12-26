const warehouse ={
    goods: [],
    findGoodbyId: function (id) {
        return this.goods.find(g => g.id == id);
    },
    addGood: function (good) {
        const existedGood = this.findGoodbyId(good.id);
        if (existedGood) {
            console.log('Этот товар уже есть на складе');
            return;
        }
        this.goods.push(good);
    },
    getWeightKg: function () {
        return this.goods.reduce((acc, el) =>
            acc += el.weight?.kg ? el.weight.kg : 0,
        0
        )
    }
};
const car = {
    id: 1,
    weight: {
        kg: 1000
    },
    brand: 'Ford'
};
const chair = {
    id: 1,
    weight: {
        kg:2
    },
};
const paper = {
    id: 1,
    color: 'red'
}

warehouse.addGood(car);
warehouse.addGood(chair);
warehouse.addGood(paper);
console.log(warehouse.goods);
