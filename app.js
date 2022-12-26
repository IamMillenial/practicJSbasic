const warehouse ={
    goods: [],
    findGoodbyId: function (id) {
        return this.goods.find(g => g.id == id);
    },


    //     let users = [
    //     {id: 1, name: "Вася"},
    //     {id: 2, name: "Петя"},
    //     {id: 3, name: "Маша"}
    // ];
    //
    // let user = users.find(item => item.id == 1);

    addGood: function (good) {
        const existedGood = this.findGoodbyId(good.id);
        if (existedGood) {
            console.log('Этот товар уже есть на складе');
            return;
        }
        this.goods.push(good);
    },

    // let arr = [1, 2, 3, 4, 5];
    //
    // let result = arr.reduce((sum, current) => sum + current, 0);
    //
    // alert(result); // 15

    getWeightKg: function () {
        return this.goods.reduce((acc, el) =>
            acc += el.weight?.kg ? el.weight.kg : 0,
        0
        )
    },
};

/*
    getWeightKg: function () {
        return this.goods.reduce((acc, el) => {

        if(el.weight !== 'undefined' && el.weight.kg !== 'undefined') {
            return acc += el.weight.kg
        } else {
            return acc += 0
        }


        }, 0)
    }
*/

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
