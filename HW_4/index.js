const students = ["Саша", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = [
  "Диференційне рівняння",
  "Теорія автоматів",
  "Алгоритми і структури даних",
];
const marks = [4, 5, 5, 3, 4, 5];

//1 Розділення студентів на пари
const getPairs = (students) => {
  const pairs = [
    [students[0], students[2]],
    [students[1], students[3]],
    [students[4], students[5]],
  ];
  return pairs;
};
const pairs = getPairs(students);

//2 Призначення теми кожній парі студентів
const getTheme = (pairs, themes) => {
  const pairsWithThemes = [...pairs].map((pair, i) => [
    pair.join(" і "),
    themes[i],
  ]);
  return pairsWithThemes;
};
const teamThemes = getTheme(pairs, themes);

//3 Поставити кожному студенту оцінку
const getStudentsMarks = (students, marks) => {
  let i = 0;
  const studMarks = students.map((elem) => {
    elem = [students[i], marks[i]];
    i++;
    return elem;
  });
  return studMarks;
};
const studentsMarks = getStudentsMarks(students, marks);

//4 Виставити оцінки за проект в парах
const getPairsMarks = (teamThemes) => {
  const pairsThemes = [...teamThemes];
  pairsThemes[0] = [...teamThemes[0]];
  pairsThemes[1] = [...teamThemes[1]];
  pairsThemes[2] = [...teamThemes[2]];
  pairsThemes.map((pair) => pair.push(Math.ceil(Math.random() * 5)));
  return pairsThemes;
};
const pairsMarks = getPairsMarks(teamThemes);

//Вивід
document.writeln("Масиви виведені через console.log для наглядності");
console.log(pairs);
console.log(teamThemes);
console.log(studentsMarks);
console.log(pairsMarks);
