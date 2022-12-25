const wallet = {
   balance: 0,
   operation: [],
    increse:function (reason, sum) {
        this.balance += sum;
        this.operation.push({
            reason: reason,
            sum: sum
        })
        return true;
    },
    decrease: function (reason, sum) {
       if (this.balance <sum) {
           console.log('недостаточно баланса');
           return false;
       }
       this.balance -= sum;
       this.operation.push({
         reason: reason,
         sum: -sum
        })
        return true;
    },
   getoperation: function () {
       return this.operation.length;
   }
}

console.log(wallet.increse('зп', '1000'));
console.log(wallet.getoperation());




