function* newFontGenerator(fontSize) {
    let currentFontSize = fontSize;
    let fontChange = '';
    while (true) {
        if (fontChange === "up") {
            fontChange = yield currentFontSize += 2;
        } else if (fontChange === "down" && currentFontSize > 2) {
            fontChange = yield currentFontSize -= 2;
        } else fontChange = yield currentFontSize;
}
}

export default newFontGenerator;

const fontGenerator = newFontGenerator(14);
console.log(fontGenerator.next().value);
console.log(fontGenerator.next("up").value);
console.log(fontGenerator.next("down").value);


