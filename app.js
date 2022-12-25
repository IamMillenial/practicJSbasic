const num1 = '89103235356';
const num2 = '+79103235356';
const num3 = '+7(910)3235356';
const num4 = '+7(910) 323-53-56';
const num5 = ' +7(910) 323-53-56 ';

const num1Error = '89103235';
const num2Error = '+7d910d323-53-56';
const num3Error = '9+7103235356';
const num4Error = '89103g35356';

const isRussianNumber = (str) => {
const clearString = str.replaceAll('-', ' ')
    .replaceAll('(', ' ')
    .replaceAll(')', ' ')
    .replaceAll(' ', '')
    .trim();

let numstring = '';

    for (let i = 0; i <= clearString.length - 1; i += 1) {
        if((i === 0 && clearString[i] === '+') || !isNaN(Number(clearString[i]))) {
            numstring += clearString[i]
        }
    }

    console.log('numstring', numstring)



   return (numstring.length === 11 || numstring.length === 12)
    && (numstring.startsWith('+7') || numstring.startsWith('8'))
}

console.log(isRussianNumber(num1));
console.log(isRussianNumber(num2));
console.log(isRussianNumber(num3));
console.log(isRussianNumber(num4));
console.log(isRussianNumber(num5));

console.log(isRussianNumber(num1Error));
console.log(isRussianNumber(num2Error));
console.log(isRussianNumber(num3Error));
console.log(isRussianNumber(num4Error));