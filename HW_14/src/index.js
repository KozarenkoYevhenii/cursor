import hw1 from './HW_1';
import hw2 from './HW_2';
import hw3 from './HW_3';
import hw4 from './HW_4';
import hw5 from './HW_5';
import hw6 from './HW_6';
import hw7 from './HW_7';
import hw8 from './HW_8';
import hw9 from './HW_9';
import hw11 from './HW_11';
import newFontGenerator from './HW_13';

hw1();
hw2(1, 10);
hw3();
hw4();
hw5();
hw6();
hw7();
hw8();
hw9();
document.body.innerHTML += "<strong>HW#13</strong> <br>";
const fontGenerator = newFontGenerator(14);
document.body.innerHTML += `${fontGenerator.next().value} <br>`;
document.body.innerHTML += "<br>";
hw11(4);

