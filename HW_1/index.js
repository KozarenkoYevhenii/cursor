const penPrice = 15.678;
const notebookPrice = 90.2345;
const bookPrice = 123.965;
const cashAmount = 500;

document.writeln("Basic <br>");

const maxPrice = Math.max(penPrice, notebookPrice, bookPrice);
document.writeln("Найвища ціна: ", maxPrice, " грн <br>");

const minPrice = Math.min(penPrice, notebookPrice, bookPrice);
document.writeln("Найнижча ціна: ", minPrice, " грн <br>");

const totalCost = penPrice + notebookPrice + bookPrice;
document.writeln("Сумарна вартість всіх товарів: ", totalCost, " грн <br>");

const intTotalCost = Math.floor(penPrice) + Math.floor(notebookPrice) + Math.floor(bookPrice);
document.writeln("Сумарна вартість всіх товарів без копійок: ", intTotalCost, " грн <br>");

const totalRoundToHundreds = Math.round(totalCost / 100) * 100;
document.writeln("Сумарна вартість округлена до сотень: ", totalRoundToHundreds, " грн <br>");

const isOdd = (intTotalCost % 2) ? false : true;
document.writeln("Сума всіх товарів (округлена в меншу сторону) парна: ", isOdd, "<br>");

const change = cashAmount - totalCost;
document.writeln("Решта з 500 грн: ", maxPrice, " грн <br>");

const averagePrice = (totalCost / 3).toFixed(2);
document.writeln("Середнє значення: ", averagePrice, " грн <br>");

const discount = Math.random().toFixed(2);
const costWithDiscount = (totalCost * (1 - discount)).toFixed(2);
document.writeln("Сумарна вартість всіх товарів зі знижкою: ", costWithDiscount, " грн <br>");

const profit = (costWithDiscount - (totalCost / 2)).toFixed(2);
document.writeln("Чистий прибуток: ", profit, " грн <br>");

document.writeln("<br> Advanced <br>");
document.writeln(`
    Найвища ціна: ${maxPrice} грн <br>
    Найнижча ціна: ${minPrice} грн <br>
    Сумарна вартість всіх товарів: ${totalCost} грн <br>
    Сумарна вартість всіх товарів без копійок: ${intTotalCost} грн <br>
    Сумарна вартість округлена до сотень: ${totalRoundToHundreds} грн <br>
    Сумарна вартість всіх товарів без копійок: ${isOdd} <br>
    Решта з 500 грн: ${maxPrice} грн <br>
    Середнє значення: ${averagePrice} грн <br>
    Сумарна вартість всіх товарів зі знижкою: ${costWithDiscount} грн <br>
    Чистий прибуток: ${profit} грн
`);