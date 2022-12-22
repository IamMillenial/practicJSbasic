const array = ['!', 'JS', 'люблю', 'Я'];
console.log(array);
const res = [];
for (let i = array.length-1; i >= 0; i=i-1) {
res.push(array[i])
}
console.log(res.join(' '));