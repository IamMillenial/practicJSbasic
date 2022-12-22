
const operations = [1000, -700, 300, -500, 10000];
const startingBalance = 100;
function getBalance(arrayofoperations, initaiBalance) {
    let balance = initaiBalance;
    for (const element of arrayOfOperations) {
        balance += element;
    }
    return balance;
}
 console.log(getBalance(operations, startingBalance))

function checkOperations(arrayofoperations, initaiBalance) {
    let balance = initaiBalance;
    let isOk = true;
    for (const element of arrayOfOperations) {
        balance += element;
        if (balance<0) {
            isOk = false;
            break;
        }
    }
    return isOk;
}
console.log(checkOperations(operations, startingBalance))

function avarageOperetions(arrayofoperations) {
    let positiveCount = 0;
    let positiveSum = 0;
    let negativeCount = 0;
    let negativeSum = 0;
        for (const element of arrayOfOperations) {
            if (element > 0) {
                positiveCount++;
                positiveSum += element;
            }
            if (element < 0) {
                negativeCount++;
                negativeSum += element;
            }
        }
            return [positiveSum/positiveCount, negativeSum/negativeCount]
        }

    console.log(avarageOperetions(operations));