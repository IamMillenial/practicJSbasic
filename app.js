const salaryAtHour = 80;
const noMoreHours = 5;
const noMoreDays = 5;

const orderHours = 40;
const currentDay = 1;

const xDay = 12;

const workDays = xDay  - (noMoreDays - currentDay);
const totalWorkHours = workDays * noMoreHours;

const myMoney = workDays * salaryAtHour * noMoreHours;
const isWellGetWork = totalWorkHours <= orderHours;

console.log('хочу столько денег за работу: ', myMoney + '$');
console.log('хватит дней на работу? ', isWellGetWork);