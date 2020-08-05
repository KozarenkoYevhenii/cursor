//1 Генерує масив випадкових чисел
const getRandomArray = (length, min, max) => {
  const randomArray = new Array(length)
    .fill(null)
    .map((el) => +Math.trunc(Math.random() * (max - min) + min));
  return randomArray;
};

//3 Розраховує середнє арифметичне число
const getAverage = (...numbers) => {
  const intNumbers = numbers.filter((el) => Number.isInteger(el));
  const average =
    intNumbers.reduce((total, el) => total + el, 0) / intNumbers.length;
  return average;
};

//4 Отримує медіану
const getMedian = (...numbers) => {
  const sortedArray = numbers
    .filter((el) => Number.isInteger(el))
    .sort((a, b) => a - b);
  if (sortedArray.length % 2) {
    return sortedArray[Math.floor(sortedArray.length / 2)];
  }
  return (
    (sortedArray[sortedArray.length / 2 - 1] +
      sortedArray[sortedArray.length / 2]) /
    2
  );
};

//5 Фільтрує парні числа
const filterEvenNumbers = (...numbers) => {
  return numbers.filter((el) => el % 2);
};

//6 Рахує кількість додатніх чисел
const countPositiveNumbers = (...numbers) => {
  return numbers.filter((el) => el > 0).length;
};

//7 Фільтрує елементи кратні п'яти
const getDividedByFive = (...numbers) => {
  return numbers.filter((el) => !(el % 5));
};

//8 Заміняє погані слова на *
const replaceBadWords = (string) => {
  const badWords = ["shit", "fuck"];
  return string
    .split(" ")
    .map((el) => {
      for (let badWord of badWords) {
        if (el.includes(badWord)) {
          return el.replace(badWord, "*".repeat(badWord.length));
        }
      }
      return el;
    })
    .join(" ");
};

//9 Розбиває слово на склади
const divideByThree = (word) => {
  const resultArray = [];
  for (let i = 0; i < word.length; i += 3) {
    if (word.length - i < 3) {
      resultArray.push(word.toLowerCase().slice(i));
    } else {
      resultArray.push(word.toLowerCase().slice(i, i + 3));
    }
  }
  return resultArray;
};

//OUTPUT

document.writeln(
  `1 Масив випадкових чисел: ${getRandomArray(15, 1, 100)} <br>`
);
document.writeln(`3 Середнє значення масиву: 
                  ${getAverage(
                    6,
                    2,
                    55,
                    11,
                    78,
                    2,
                    55,
                    77,
                    57,
                    87,
                    23,
                    2,
                    56,
                    3,
                    2
                  )} <br>`);
document.writeln(
  `4 Медіана: ${getMedian(
    6,
    2,
    55,
    11,
    78,
    2,
    55,
    77,
    57,
    87,
    23,
    2,
    56,
    3,
    2
  )} <br>`
);
document.writeln(
  `5 Фільтр парних чисел: ${filterEvenNumbers(1, 2, 3, 4, 5, 6)} <br>`
);
document.writeln(
  `6 Кількість додатніх чисел: ${countPositiveNumbers(
    1,
    -2,
    3,
    -4,
    -5,
    6
  )} <br>`
);
document.writeln(
  `7 Числа кратні 5: ${getDividedByFive(
    6,
    2,
    55,
    11,
    78,
    2,
    55,
    77,
    57,
    87,
    23,
    2,
    56,
    3,
    2
  )} <br>`
);
document.writeln(
  `8 Погані слова замінені на *: ${replaceBadWords("Holy shit!")} <br>`
);

document.writeln(
  `9 Слово розбите по складах: ${divideByThree("Commander")} <br>`
);
