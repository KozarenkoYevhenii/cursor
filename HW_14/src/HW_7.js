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

//---------------------OUTPUT---------------------

function hw7() {
  document.body.innerHTML += "<strong>HW#7</strong> <br>";
  document.body.innerHTML += `1 Сума податків, які я заплачу: ${getMyTaxes.call(
    ukraine,
    1500
  )} <br>`;
  document.body.innerHTML += `2 Середня сума податку: ${getMiddleTaxes.call(
    latvia
  )} <br>`;
  document.body.innerHTML += `3 Загальна сума податків ІТ спеціалістів в країні: ${getTotalTaxes.call(
    litva
  )} <br>`;
  document.body.innerHTML += "<br>";
}

export default hw7;
