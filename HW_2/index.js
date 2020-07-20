let N = +prompt("Enter N:");

while (true) {
  if (isNaN(N) || N % 1 !== 0) {
    N = +prompt("N should be integer, enter N:");
  } else break;
}

let M = +prompt("Enter M:");

while (true) {
  if (isNaN(M) || M % 1 !== 0) {
    M = +prompt("M should be integer, enter M:");
  } else if (M <= N) {
    M = +prompt("M should be greater then N, enter M:");
  } else break;
}

let missEven = confirm("Do you wanna miss even numbers?");

let sum = 0;
for (N; N <= M; N++) {
  if (missEven) {
    if (N % 2 === 0) {
      continue;
    } else {
      sum += N;
    }
  } else {
    sum += N;
  }
}

document.writeln(`Сума = ${sum}`);
