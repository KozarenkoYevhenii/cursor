const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

//1 Скільки податків я заплачу в певній країні
function getMyTaxes(salary) {
  return this.tax * salary;
}

//2 Середня сума податку для країни
function getMiddleTaxes() {
  return this.tax * this.middleSalary;
}

//3 Скільки всього ІТ спеціалісти платять податків у країні
function getTotalTaxes() {
  return this.tax * this.middleSalary * this.vacancies;
}

//4 Генерація з/п і розрахунок податку
function getMySalary(country) {
  minSalary = 1500;
  maxSalary = 2000;
  let salaryInfo = { salary: null, taxes: null, profit: null };
  setInterval(() => {
    salaryInfo.salary = parseInt(
      Math.random() * (maxSalary - minSalary) + minSalary
    );
    salaryInfo.taxes = country.tax * salaryInfo.salary;
    salaryInfo.profit = parseInt(salaryInfo.salary * (1 - country.tax));
    console.log(salaryInfo);
  }, 10000);
}

//---------------------OUTPUT---------------------

document.writeln(
  `1 Сума податків, які я заплачу: ${getMyTaxes.call(ukraine, 1500)} <br>`
);
document.writeln(`2 Середня сума податку: ${getMiddleTaxes.call(latvia)} <br>`);
document.writeln(
  `3 Загальна сума податків ІТ спеціалістів в країні: ${getTotalTaxes.call(
    litva
  )} <br>`
);
document.writeln(`4 Результат виведений в консоль`);
getMySalary(ukraine);
