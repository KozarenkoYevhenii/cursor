function getRandomChinese(length) {
  const startTime = Date.now();
  return new Promise((resolve, reject) => {
    if (length === 0 || !Number.isInteger(length)) reject();
    let signs = "";
    let i = 0;
    while (length > i) {
      setTimeout(() => {
        signs += String.fromCharCode(Date.now().toString().slice(-6, -1));
        if (signs.length === length) resolve(signs);
      }, i * 50 + 50);
      i++;
    }
  })
    .then((signs) => {
      const endTime = Date.now();
      const duration = endTime - startTime;
      console.log(`${signs} ${duration}ms`)
    })
    .catch(() => console.log("Введіть ціле число більше за нуль"));
}

getRandomChinese(4);

document.writeln(
  `Викликати функцію "getRandomChinese(length)" та подивитись на результат її роботи можна в консолі`
);
