// const salaryAtHour = 80;
// const noMoreHours = 5;
// const noMoreDays = 5;
//
// const orderHours = 40;
// const currentDay = 1;
//
// const xDay = 12;
//
// const workDays = xDay  - (noMoreDays - currentDay);
// const totalWorkHours = workDays * noMoreHours;
//
// const myMoney = workDays * salaryAtHour * noMoreHours;
// const isWellGetWork = totalWorkHours <= orderHours;
//
// console.log('хочу столько денег за работу: ', myMoney + '$');
// console.log('хватит дней на работу? ', isWellGetWork);


const contrib = 12000;
const perc = 0.07;
const priceHouse = 13500;
const term = 24;
const res = contrib * (1 + perc / 12) ** term;
if (res > priceHouse) {
    console.log(`Хватает денег и остаток от суммы: ${priceHouse - res}`)

}
else
{
    console.log(`Не хватает денег. Накопили: ${res}`)


}
