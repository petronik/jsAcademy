let start = document.getElementById('start'),
    budgetValue = document.getElementsByClassName('budget-value'),
    dayBudgetValue = document.getElementsByClassName('daybudget-value'),
    levelValue = document.getElementsByClassName('level-value'),
    expensestValue = document.getElementsByClassName('expenses-value'),
    optionalexpensesValue = document.getElementsByClassName(
        'optionalexpenses-value'),
    incomeValue = document.getElementsByClassName('income-value'),
    monthsavingsValue = document.getElementsByClassName('monthsavings-value'),
    yearsavingsValue = document.getElementsByClassName('yearsavings-value'),
    inputItems = document.getElementsByClassName('expenses-item'),

    submit1 = document.getElementsByTagName('expenses-item-btn'),
    submit2 = document.getElementsByTagName('optionalexpenses-btn'),
    submit3 = document.getElementsByTagName('count-budget-btn'),

    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item');

console.log(optionalExpensesItem);