function hw1() {
  const penPrice = 15.678;
  const notebookPrice = 90.2345;
  const bookPrice = 123.965;
  const cashAmount = 500;

  const maxPrice = Math.max(penPrice, notebookPrice, bookPrice);

  const minPrice = Math.min(penPrice, notebookPrice, bookPrice);

  const totalCost = penPrice + notebookPrice + bookPrice;

  const intTotalCost =
    Math.floor(penPrice) + Math.floor(notebookPrice) + Math.floor(bookPrice);

  const totalRoundToHundreds = Math.round(totalCost / 100) * 100;

  const isOdd = intTotalCost % 2 ? false : true;

  const change = cashAmount - totalCost;

  const averagePrice = (totalCost / 3).toFixed(2);

  const discount = Math.random().toFixed(2);
  const costWithDiscount = (totalCost * (1 - discount)).toFixed(2);

  const profit = (costWithDiscount - totalCost / 2).toFixed(2);

  document.body.innerHTML = `
  <strong>HW#1</strong> <br>
    Найвища ціна: ${maxPrice} грн <br>
    Найнижча ціна: ${minPrice} грн <br>
    Сумарна вартість всіх товарів: ${totalCost} грн <br>
    Сумарна вартість всіх товарів без копійок: ${intTotalCost} грн <br>
    Сумарна вартість округлена до сотень: ${totalRoundToHundreds} грн <br>
    Сума всіх товарів (округлена в меншу сторону) парна: ${isOdd} <br>
    Решта з 500 грн: ${maxPrice} грн <br>
    Середнє значення: ${averagePrice} грн <br>
    Сумарна вартість всіх товарів зі знижкою: ${costWithDiscount} грн <br>
    Чистий прибуток: ${profit} грн <br>
`;
document.body.innerHTML += "<br>";
}

export default hw1;
