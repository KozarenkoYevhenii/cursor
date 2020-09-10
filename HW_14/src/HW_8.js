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

const student = new Student(
  "Вища Школи Психотерапії м.Одеса",
  1,
  "Остап Бендер"
);

function hw8() {
  document.body.innerHTML += "<strong>HW#8</strong> <br>";
  document.body.innerHTML += `Оцінки студента: ${student.marks} <br>`;
  document.body.innerHTML += "<br>";
}

export default hw8;


