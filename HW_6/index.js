const students = [
  {
    name: "Tanya",
    course: 3,
    subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4],
    },
  },
  {
    name: "Victor",
    course: 4,
    subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5],
    },
  },
  {
    name: "Anton",
    course: 2,
    subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5],
    },
  },
];

//------------------------------------Допоміжні функції-----------------------
//Робить слово з великої літери
const toCapital = (name) => {
  newName = name[0].toUpperCase() + name.slice(1).toLowerCase();
  return newName;
};

//Видаляє обрану літеру з речення
const changeWordDivider = (sentence) => {
  for (let i = 0; i < sentence.length; i++) {
    sentence = sentence.replace("_", " ");
  }
  return sentence;
};

// Розраховує середнє арифметичне число
const getAverage = (numbers) => {
  const intNumbers = numbers.filter((el) => Number.isInteger(el));
  const average =
    intNumbers.reduce((total, el) => total + el, 0) / intNumbers.length;
  return average;
};

//Рахує кількість вибраних літер в слові
const countLetter = (letter, word) => {
  let count = 0;
  for (let i = 0; i < word.length; i++) {
    if (word[i].toLowerCase() === letter.toLowerCase()) count++;
  }
  return count;
};

//---------------------------Домашне завдання-----------------------
//1 Повертає перелік предметів студента
const getSubjects = (student) => {
  const subjects = Object.keys(student.subjects);
  for (let subject in subjects) {
    subjects[subject] = changeWordDivider(toCapital(subjects[subject]));
  }
  return subjects;
};

//2 Середня оцінка студента
const getAverageMark = (student) => {
  let allMarks = [];
  const subjects = Object.keys(student.subjects);
  for (let subject of subjects) {
    allMarks = [...allMarks, ...Object.values(student.subjects[subject])];
  }
  return getAverage(allMarks).toFixed(2);
};

//3 Загальна інформація про студента
const getStudentInfo = (student) => {
  return {
    course: student.course,
    name: student.name,
    averageMark: getAverageMark(student),
  };
};

//4 Імена студентів у алфафітному порядку
const getStudentsNames = (students) => {
  let studentsName = [];
  for (let student of students) {
    studentsName.push(student.name);
  }
  return studentsName.sort();
};

//5 Вибирає кращого студента
const getBestStudent = (students) => {
  let maxMark = 0;
  let bestStudent = null;
  for (let student of students) {
    studMark = getAverageMark(student);
    if (+studMark > maxMark) {
      maxMark = studMark;
      bestStudent = student.name;
    }
  }
  return bestStudent;
};

//6 Кількість букв у слові
const calculateWordLetters = (word) => {
  let countOfLetters = {};
  for (let i = 0; i < word.length; i++) {
    let count = countLetter(word[i], word);
    if (!Object.keys(countOfLetters).includes(word[i]))
      countOfLetters[word[i]] = count;
  }
  return countOfLetters;
};


//-------------------------Вивід результатів--------------------
document.writeln(
  `1 Перелік предметів студента: ${getSubjects(students[0])} <br>`
);
document.writeln(
  `2 Середня оцінка студента: ${getAverageMark(students[0])} <br>`
);
document.writeln(
  `3 Загальна інформація про студента: виведено в консолі <br>`
);
console.log(getStudentInfo(students[0]));
document.writeln(
  `4 Імена студентів у алфафітному порядку: ${getStudentsNames(students)} <br>`
);
document.writeln(`5 Ім'я кращого студента: ${getBestStudent(students)} <br>`);
document.writeln(
  `6 Кількість букв у слові: виведено в консолі <br>`
);
console.log(calculateWordLetters("test"));
