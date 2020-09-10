function hw3() {
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
    const newName = name[0].toUpperCase() + name.slice(1).toLowerCase();
    return newName;
  };

  //Сума після вирахування податків
  const culcPayAfterTax = (amount, tax) => {
    const pureProfit = (amount * (1 - tax / 100)).toFixed();
    return pureProfit;
  };

  //Випадкове число в заданому діапазоні
  const getRandomNumber = (N, M) => {
    const randNum = (Math.random() * (M - N) + N).toFixed();
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
      let newAmount = +amountAndCurrency.replace("$", "") * 25;
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
    for (let i = 0; i < sentence.length; i++) {
      //Використав цикл замість методу replaceAll()
      newSentence = newSentence.replace(letter, ""); //бо метод підтримується тільки в найновіших
    } //версіях деяких браузерів
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
    const array = sentence.toLowerCase().split(""); //Використання методу filter() підглянув у
    let resultArray = array.filter(
      //одногрупників, але розібрався
      (elem, index, array) => array.indexOf(elem) === array.lastIndexOf(elem)
    );
    return resultArray.join("");
  };

  // output
  document.body.innerHTML += "<strong>HW#3</strong> <br>";
  document.body.innerHTML += `Найбільша цифра в числі 748: ${getMaxDigit(
    748
  )} <br>`; //1
  document.body.innerHTML += `2 у 8 степені: ${numberInPower(2, 8)} <br>`; //2
  document.body.innerHTML += `yevhenii => ${toCapital("yevhenii")} <br>`; //3
  document.body.innerHTML += `Сума 1000, податок 18%, до виплати: ${culcPayAfterTax(
    1000,
    18
  )} <br>`; //4
  document.body.innerHTML += `Випадкове чило від 1 до 10: ${getRandomNumber(
    1,
    10
  )} <br>`; //5
  document.body.innerHTML += `Кількість літер "а" в слові "Асталавіста": ${countLetter(
    "а",
    "Асталавіста"
  )} <br>`; //6
  document.body.innerHTML += `100$ = ${convertCurrency("100$")} <br>`; //7
  document.body.innerHTML += `Випадковий пароль з восьми цифр: ${getRandomPassword()} <br>`; //8
  document.body.innerHTML += `Видалити літеру "а" з слова "blablabla": ${deleteLetters(
    "a",
    "blablabla"
  )} <br>`; //9
  document.body.innerHTML += `Чи є паліндромом фраза "Аргентина манит негра": ${isPalyndrom(
    "Аргентина манит негра"
  )} <br>`; //10
  document.body.innerHTML += `Видалити всі літери які дублюються у фразі "Бисквит был очень нежный":
                 ${deleteDuplicateLetter("Бисквит был очень нежный")} <br>`; //11
  document.body.innerHTML += "<br>";
}

export default hw3;
