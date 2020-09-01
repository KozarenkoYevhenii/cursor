function* createIdGenerator() {
    let i = 1;
    while (true) {
        yield i;
        i++;
    }
}

const idGenerator = createIdGenerator();

console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);


function* newFontGenerator(fontSize) {
    currentFontSize = fontSize;
    let fontChange = '';
    while (true) {
        if (fontChange === "up") {
            fontChange = yield currentFontSize += 2;
        } else if (fontChange === "down" && currentFontSize > 2) {
            fontChange = yield currentFontSize -= 2;
        } else fontChange = yield currentFontSize;
}
}

const fontGenerator = newFontGenerator(14);
console.log(fontGenerator.next().value);
console.log(fontGenerator.next("up").value);
console.log(fontGenerator.next("down").value);

document.writeln(
    `Викликати функції "idGenerator.next().value" і "fontGenerator.next("up").value" та подивитись на результат їх роботи можна в консолі`
  );
