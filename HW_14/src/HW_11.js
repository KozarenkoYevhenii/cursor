function getRandomChinese(length) {
  document.body.innerHTML += "<strong>HW#11</strong> <br>";
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
      document.body.innerHTML += `${signs} ${duration}ms`
      document.body.innerHTML += '<br>'
    })
    .catch(() => console.log("Введіть ціле число більше за нуль"));
}

export default getRandomChinese;
