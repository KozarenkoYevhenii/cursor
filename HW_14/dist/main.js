!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";t.r(n);var r=function(){const e=Math.max(15.678,90.2345,123.965),n=Math.min(15.678,90.2345,123.965),t=Math.floor(15.678)+Math.floor(90.2345)+Math.floor(123.965),r=100*Math.round(2.298775),o=!(t%2),s=(229.8775/3).toFixed(2),i=(229.8775*(1-Math.random().toFixed(2))).toFixed(2),u=(i-114.93875).toFixed(2);document.body.innerHTML=`\n  <strong>HW#1</strong> <br>\n    Найвища ціна: ${e} грн <br>\n    Найнижча ціна: ${n} грн <br>\n    Сумарна вартість всіх товарів: 229.8775 грн <br>\n    Сумарна вартість всіх товарів без копійок: ${t} грн <br>\n    Сумарна вартість округлена до сотень: ${r} грн <br>\n    Сума всіх товарів (округлена в меншу сторону) парна: ${o} <br>\n    Решта з 500 грн: ${e} грн <br>\n    Середнє значення: ${s} грн <br>\n    Сумарна вартість всіх товарів зі знижкою: ${i} грн <br>\n    Чистий прибуток: ${u} грн <br>\n`,document.body.innerHTML+="<br>"};var o=function(e,n,t=!1){let r=e,o=e,s=n;const i=t;for(;isNaN(r)||r%1!=0;)r=+prompt("N should be integer, enter N:");for(;;)if(isNaN(s)||s%1!=0)s=+prompt("M should be integer, enter M:");else{if(!(s<=r))break;s=+prompt("M should be greater then N, enter M:")}let u=0;for(;r<=s;r++)i&&r%2==0||(u+=r);document.body.innerHTML+=`\n  <strong>HW#2</strong> <br>\n  Сума цифр від ${o} до ${s} = ${u} <br>`,document.body.innerHTML+="<br>"};var s=function(){var e,n,t,r,o,s;document.body.innerHTML+="<strong>HW#3</strong> <br>",document.body.innerHTML+=`Найбільша цифра в числі 748: ${(e=>{const n=Math.abs(e).toString().split("");return Math.max(...n)})(748)} <br>`,document.body.innerHTML+=`2 у 8 степені: ${((e,n)=>{let t=1;for(let r=1;r<=n;r++)t*=e;return t})(2,8)} <br>`,document.body.innerHTML+=`yevhenii => ${e="yevhenii",e[0].toUpperCase()+e.slice(1).toLowerCase()} <br>`,document.body.innerHTML+=`Сума 1000, податок 18%, до виплати: ${n=1e3,t=18,(n*(1-t/100)).toFixed()} <br>`,document.body.innerHTML+=`Випадкове чило від 1 до 10: ${r=1,o=10,(Math.random()*(o-r)+r).toFixed()} <br>`,document.body.innerHTML+=`Кількість літер "а" в слові "Асталавіста": ${((e,n)=>{let t=0;for(let r=0;r<n.length;r++)n[r].toLowerCase()===e.toLowerCase()&&t++;return t})("а","Асталавіста")} <br>`,document.body.innerHTML+=`100$ = ${(e=>{if(e.toLowerCase().endsWith("$")){return 25*+e.replace("$","")+"UAH"}return e.toLowerCase().endsWith("uah")?(newAmount=+e.toLowerCase().replace("uah","")/25,newAmount+"$"):"Введіть валюту в $ або UAH"})("100$")} <br>`,document.body.innerHTML+=`Випадковий пароль з восьми цифр: ${((e=8)=>(Math.random()*Math.pow(10,e)).toFixed())()} <br>`,document.body.innerHTML+=`Видалити літеру "а" з слова "blablabla": ${((e,n)=>{let t=n;for(let r=0;r<n.length;r++)t=t.replace(e,"");return t})("a","blablabla")} <br>`,document.body.innerHTML+=`Чи є паліндромом фраза "Аргентина манит негра": ${(e=>{let n=e;for(let t=0;t<e.length;t++)n=n.replace(" ","").toLowerCase();return n.split("").reverse().join("")===n})("Аргентина манит негра")} <br>`,document.body.innerHTML+=`Видалити всі літери які дублюються у фразі "Бисквит был очень нежный":\n                 ${s="Бисквит был очень нежный",s.toLowerCase().split("").filter((e,n,t)=>t.indexOf(e)===t.lastIndexOf(e)).join("")} <br>`,document.body.innerHTML+="<br>"};var i=function(){const e=["Саша","Ігор","Олена","Іра","Олексій","Світлана"],n=(e=>[[e[0],e[2]],[e[1],e[3]],[e[4],e[5]]])(e),t=((e,n)=>[...e].map((e,t)=>[e.join(" і "),n[t]]))(n,["Диференційне рівняння","Теорія автоматів","Алгоритми і структури даних"]),r=((e,n)=>{let t=0;return e.map(r=>(r=[e[t],n[t]],t++,r))})(e,[4,5,5,3,4,5]),o=(e=>[...e].map(e=>[...e,Math.ceil(5*Math.random())]))(t);document.body.innerHTML+="<strong>HW#4</strong> <br>",document.body.innerHTML+="Масиви виведені через console.log для наглядності <br>",document.body.innerHTML+="<br>",console.log(n),console.log(t),console.log(r),console.log(o)};var u=function(){var e,n,t;((...e)=>{let n=[],t=0;e.forEach((r,o)=>{let s=0;for(let n in e)e[n]===r&&s++;t<s&&(t=s),o===e.lastIndexOf(r)&&n.push({[r]:s})}),n=n.filter(e=>Object.values(e)[0]===t).map(e=>+Object.keys(e)[0]),console.log(...n)})(1,2,2,3),document.body.innerHTML+="<strong>HW#5</strong> <br>",document.body.innerHTML+=`1 Масив випадкових чисел: ${e=15,n=1,t=100,new Array(e).fill(null).map(e=>+Math.trunc(Math.random()*(t-n)+n))} <br>`,document.body.innerHTML+=`3 Середнє значення масиву: \n                  ${((...e)=>{const n=e.filter(e=>Number.isInteger(e));return n.reduce((e,n)=>e+n,0)/n.length})(6,2,55,11,78,2,55,77,57,87,23,2,56,3,2)} <br>`,document.body.innerHTML+=`4 Медіана: ${((...e)=>{const n=e.filter(e=>Number.isInteger(e)).sort((e,n)=>e-n);return n.length%2?n[Math.floor(n.length/2)]:(n[n.length/2-1]+n[n.length/2])/2})(6,2,55,11,78,2,55,77,57,87,23,2,56,3,2)} <br>`,document.body.innerHTML+=`5 Фільтр парних чисел: ${((...e)=>e.filter(e=>e%2))(1,2,3,4,5,6)} <br>`,document.body.innerHTML+=`6 Кількість додатніх чисел: ${((...e)=>e.filter(e=>e>0).length)(1,-2,3,-4,-5,6)} <br>`,document.body.innerHTML+=`7 Числа кратні 5: ${((...e)=>e.filter(e=>!(e%5)))(6,2,55,11,78,2,55,77,57,87,23,2,56,3,2)} <br>`,document.body.innerHTML+=`8 Погані слова замінені на *: ${(e=>{const n=["shit","fuck"];return e.split(" ").map(e=>{for(let t of n)if(e.includes(t))return e.replace(t,"*".repeat(t.length));return e}).join(" ")})("Holy shit!")} <br>`,document.body.innerHTML+=`9 Слово розбите по складах: ${(e=>{const n=[];for(let t=0;t<e.length;t+=3)e.length-t<3?n.push(e.toLowerCase().slice(t)):n.push(e.toLowerCase().slice(t,t+3));return n})("Commander")} <br>`,document.body.innerHTML+="<br>"};const d=[{name:"Tanya",course:3,subjects:{math:[4,4,3,4],algorithms:[3,3,3,4,4,4],data_science:[5,5,3,4]}},{name:"Victor",course:4,subjects:{physics:[5,5,5,3],economics:[2,3,3,3,3,5],geometry:[5,5,2,3,5]}},{name:"Anton",course:2,subjects:{statistics:[4,5,5,5,5,3,4,3,4,5],english:[5,3],cosmology:[5,5,5,5]}}],c=e=>{for(let n=0;n<e.length;n++)e=e.replace("_"," ");return e},l=(e,n)=>{let t=0;for(let r=0;r<n.length;r++)n[r].toLowerCase()===e.toLowerCase()&&t++;return t},a=e=>{let n=[];const t=Object.keys(e.subjects);for(let r of t)n=[...n,...Object.values(e.subjects[r])];return+(e=>{const n=e.filter(e=>Number.isInteger(e));return n.reduce((e,n)=>e+n,0)/n.length})(n).toFixed(2)};var b=function(){document.body.innerHTML+="<strong>HW#6</strong> <br>",document.body.innerHTML+=`1 Перелік предметів студента: ${(e=>{const n=Object.keys(e.subjects);for(let e in n)n[e]=c((t=n[e])[0].toUpperCase()+t.slice(1).toLowerCase());var t;return n})(d[0])} <br>`,document.body.innerHTML+=`2 Середня оцінка студента: ${a(d[0])} <br>`,document.body.innerHTML+="3 Загальна інформація про студента: виведено в консолі <br>",console.log((e=>({course:e.course,name:e.name,averageMark:a(e)}))(d[0])),document.body.innerHTML+=`4 Імена студентів у алфафітному порядку: ${(e=>{let n=[];for(let t of e)n.push(t.name);return n.sort()})(d)} <br>`,document.body.innerHTML+=`5 Ім'я кращого студента: ${(e=>{let n=0,t=null;for(let r of e){const e=a(r);+e>n&&(n=e,t=r.name)}return t})(d)} <br>`,document.body.innerHTML+='6 Кількість букв у слові "test": виведено в консолі <br>',console.log((e=>{let n={};for(let t=0;t<e.length;t++){let r=l(e[t],e);Object.keys(n).includes(e[t])||(n[e[t]]=r)}return n})("test")),document.body.innerHTML+="<br>"};const m={tax:.195,middleSalary:1789,vacancies:11476},y={tax:.25,middleSalary:1586,vacancies:3921},M={tax:.15,middleSalary:1509,vacancies:1114};function f(e){return this.tax*e}function h(){return this.tax*this.middleSalary}function g(){return this.tax*this.middleSalary*this.vacancies}var H=function(){document.body.innerHTML+="<strong>HW#7</strong> <br>",document.body.innerHTML+=`1 Сума податків, які я заплачу: ${f.call(m,1500)} <br>`,document.body.innerHTML+=`2 Середня сума податку: ${h.call(y)} <br>`,document.body.innerHTML+=`3 Загальна сума податків ІТ спеціалістів в країні: ${g.call(M)} <br>`,document.body.innerHTML+="<br>"};const L=new class{constructor(e,n,t){this.university=e,this.course=n,this.fullName=t,this.studentMarks=[5,4,4,5],this.dismissStatus=!1}get marks(){return this.dismissStatus?null:this.studentMarks}set marks(e){if(this.dismissStatus)return null;this.studentMarks.push(e)}dismiss(){this.dismissStatus=!0}recover(){this.dismissStatus=!1}getInfo(){return document.writeln(`2 Студент ${this.course} курсу ${this.university} ${this.fullName} <br>`)}getAverageMark(){return this.studentMarks.reduce((e,n)=>e+n,0)/this.studentMarks.length}}("Вища Школи Психотерапії м.Одеса",1,"Остап Бендер");var p=function(){document.body.innerHTML+="<strong>HW#8</strong> <br>",document.body.innerHTML+=`Оцінки студента: ${L.marks} <br>`,document.body.innerHTML+="<br>"};var T=()=>{document.body.innerHTML+="<strong>HW#9</strong> <br>",document.body.innerHTML+="<div class = 'wrapper'></div>";const e=document.body.querySelector(".wrapper");let n=0;for(;n<25;){let t=Math.round(999999*Math.random());e.innerHTML+=`<div style = 'background-color : #${t}' class = 'block'></div>`,n++}document.body.innerHTML+="\n  <style>\n    .wrapper{\n      display : grid;\n      grid-template-columns : repeat(5, 50px);\n    }\n    .block {\n      width : 50px;\n      height : 50px;\n      padding : 0;\n      margin : 0;\n    }\n  ",document.body.innerHTML+="<br>"};var $=function(e){document.body.innerHTML+="<strong>HW#11</strong> <br>";const n=Date.now();return new Promise((n,t)=>{0!==e&&Number.isInteger(e)||t();let r="",o=0;for(;e>o;)setTimeout(()=>{r+=String.fromCharCode(Date.now().toString().slice(-6,-1)),r.length===e&&n(r)},50*o+50),o++}).then(e=>{const t=Date.now()-n;document.body.innerHTML+=`${e} ${t}ms`,document.body.innerHTML+="<br>"}).catch(()=>console.log("Введіть ціле число більше за нуль"))};function*v(e){let n=e,t="";for(;;)t="up"===t?yield n+=2:"down"===t&&n>2?yield n-=2:yield n}var x=v;const w=v(14);console.log(w.next().value),console.log(w.next("up").value),console.log(w.next("down").value),r(),o(1,10),s(),i(),u(),b(),H(),p(),T(),document.body.innerHTML+="<strong>HW#13</strong> <br>";const j=x(14);document.body.innerHTML+=j.next().value+" <br>",document.body.innerHTML+="<br>",$(4)}]);