class Student {
  constructor(university, course, fullName) {
    this.university = university;
    this.course = course;
    this.fullName = fullName;
    this.studentMarks = [5, 4, 4, 5];
    this.dismissStatus = false;
  }
  get marks() {
    if (this.dismissStatus) return null;
    else return this.studentMarks;
  }
  set marks(mark) {
    if (this.dismissStatus) return null;
    else this.studentMarks.push(mark);
  }
  dismiss() {
    this.dismissStatus = true;
  }
  recover() {
    this.dismissStatus = false;
  }
  getInfo() {
    return document.writeln(
      `2 Студент ${this.course} курсу ${this.university} ${this.fullName} <br>`
    );
  }
  getAverageMark() {
    return (
      this.studentMarks.reduce((total, mark) => total + mark, 0) /
      this.studentMarks.length
    );
  }
}

//1 Створюємо екземпляр класу Student
const student = new Student(
  "Вища Школи Психотерапії м.Одеса",
  1,
  "Остап Бендер"
);
console.log(student);
document.writeln(`1 Створений екземпляр класу виведений в консоль <br>`);
//2 Метод повертає інформацію про студента
student.getInfo();
//3 Отримуємо оцінки студента
document.writeln(`3 Оцінки студента: ${student.marks} <br>`);
//4 Додаємо оцінку і виводимо всі оцінки
student.marks = 5;
document.writeln(`4 Оцінки студента: ${student.marks} <br>`);
//5 Отримуємо середній бал студента
document.writeln(`5 Середній бал студента: ${student.getAverageMark()} <br>`);
//6 Виключаємо студента і пробуємо додати та отримати оцінки
student.dismiss();
document.writeln(`6 Оцінки студента: ${student.marks} <br>`);
student.marks = 5;
document.writeln(`6 Додаємо оцінку: ${student.marks} <br>`);
//7 Поновлюємо студента і пробуємо додати та отримати оцінки
student.recover();
document.writeln(`7 Оцінки студента: ${student.marks} <br>`);
student.marks = 5;
document.writeln(`7 Додаємо оцінку: ${student.marks} <br>`);

//-------------------Advanced-------------------------------

class BudgetStudent extends Student {
  constructor(university, course, fullName) {
    super(university, course, fullName);
    setInterval(() => {
      if (this.getAverageMark() >= 4 && this.dismissStatus === false) {
        this.getScholarship();
      }
    }, 30000);
  }
  getScholarship() {
    console.log(`Ви отримали 1400 грн. стипендії`);
  }
}

document.writeln(`Advanced <br>`);
//1 Створюємо екземпляр класу BudgetStudent
const budgetStudent = new BudgetStudent(
  "Вища Школи Психотерапії м.Одеса",
  1,
  "Остап Бендер"
);
console.log(budgetStudent);
document.writeln(`1 Створений екземпляр класу виведений в консоль <br>`);
//2 Студент отримує стипендію за умови що він не виключений і його середній бал >= 4
document.writeln(
  `2,3,4,5 Результат запиту на стипендію виведений в консоль (очікуйте 30 секунд) <br>`
);
