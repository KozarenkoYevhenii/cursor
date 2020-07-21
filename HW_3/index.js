//Найбільша цифра в числі
const getMaxDigit = (number) => {
  const digits = Math.abs(number).toString().split("");
  let maxDigit = Math.max(...digits);
  return maxDigit;
};

//Піднесення числа в степінь
const numberInPower = (num, pow) => {
  let result = 1;
  for (let i = 1; i <= pow; i++) {
    result *= num;
  }
  return result;
};

//Робить слово з великої літери
const toCapital = (name) => {
  newName = name[0].toUpperCase() + name.slice(1).toLowerCase();
  return newName;
};

//Сума після вирахування податків
const culcPayAfterTax = (amount, tax) => {
  pureProfit = (amount * (1 - tax / 100)).toFixed();
  return pureProfit;
};

//Випадкове число в заданому діапазоні
const getRandomNumber = (N, M) => {
  randNum = (Math.random() * (M - N) + N).toFixed();
  return randNum;
};

//Рахує кількість вибраних літер в слові
const countLetter = (letter, word) => {
  let count = 0;
  for (let i = 0; i < word.length; i++) {
    if (word[i].toLowerCase() === letter.toLowerCase()) count++;
  }
  return count;
};

//Конвертує валюту
const convertCurrency = (amountAndCurrency) => {
  if (amountAndCurrency.toLowerCase().endsWith("$")) {
    newAmount = +amountAndCurrency.replace("$", "") * 25;
    return newAmount + "UAH";
  } else if (amountAndCurrency.toLowerCase().endsWith("uah")) {
    newAmount = +amountAndCurrency.toLowerCase().replace("uah", "") / 25;
    return newAmount + "$";
  } else return "Введіть валюту в $ або UAH";
};

//Генерує випадковий пароль заданої довжини
const getRandomPassword = (amountOfDigits = 8) => {
  let password = (Math.random() * Math.pow(10, amountOfDigits)).toFixed();
  return password;
};

//Видаляє обрану літеру з речення
const deleteLetters = (letter, sentence) => {
  let newSentence = sentence;
  for (let i = 0; i < sentence.length; i++) {            //Використав цикл замість методу replaceAll()
    newSentence = newSentence.replace(letter, "");       //бо метод підтримується тільки в найновіших
  }                                                      //версіях деяких браузерів
  return newSentence;
};

//Перевіряє чи фраза є паліндромом
const isPalyndrom = (word) => {
  let wordWithoutSpaces = word;
  for (let i = 0; i < word.length; i++) {
    wordWithoutSpaces = wordWithoutSpaces.replace(" ", "").toLowerCase();
  }
  let reverseWord = wordWithoutSpaces.split("").reverse().join("");
  if (reverseWord === wordWithoutSpaces) return true;
  return false;
};

//Видаляє літери які повторюються
const deleteDuplicateLetter = (sentence) => {
  array = sentence.toLowerCase().split("");                                     //Використання методу filter() підглянув у
  let resultArray = array.filter(                                               //одногрупників, але розібрався
    (elem, index, array) => array.indexOf(elem) === array.lastIndexOf(elem)
  );
  return resultArray.join("");
};



// output
document.writeln(`Найбільша цифра в числі 748: ${getMaxDigit(748)} <br>`); //1
document.writeln(`2 у 8 степені: ${numberInPower(2, 8)} <br>`); //2
document.writeln(`yevhenii => ${toCapital("yevhenii")} <br>`); //3
document.writeln(`Сума 1000, податок 18%, до виплати: ${culcPayAfterTax(1000, 18)} <br>`); //4
document.writeln(`Випадкове чило від 1 до 10: ${getRandomNumber(1, 10)} <br>`); //5
document.writeln(`Кількість літер "а" в слові "Асталавіста": ${countLetter("а", "Асталавіста")} <br>`); //6
document.writeln(`100$ = ${convertCurrency("100$")} <br>`); //7
document.writeln(`Випадковий пароль з восьми цифр: ${getRandomPassword()} <br>`); //8
document.writeln(`Видалити літеру "а" з слова "blablabla": ${deleteLetters("a", "blablabla")} <br>`); //9
document.writeln(`Чи є паліндромом фраза "Аргентина манит негра": ${isPalyndrom("Аргентина манит негра")} <br>`); //10
document.writeln(`Видалити всі літери які дублюються у фразі "Бисквит был очень нежный":
                 ${deleteDuplicateLetter("Бисквит был очень нежный")}`); //11