var money = prompt("Ваш бюджет на месяц?" , "1000");
var time = prompt("Введите дату в формате YYYY-MM-DD", "2012-12-12");
var itemOfExpenditure = prompt(
    "Введите обязательную статью расходов в этом месяце", "qwerty"),
itemOfExpenditureCost = prompt("Во сколько обойдется?", "123");


var appData = {
    budget: `${money}`,
    timeData: `${time}`,
    expenses: {
        itemOfExpenditure,
        itemOfExpenditureCost
    },
    optionalExpenses: {},
    income: [],
    savings: false
};
var oneDayBudget = money / 30;

alert("Ваш бюджет на " + appData.timeData + " составляет " +
 Math.floor(oneDayBudget) + " гривен");
console.log(appData);
