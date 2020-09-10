function hw2(n, m, mE = false) {
  let N = n;
  let startN = n;
  let M = m;
  const missEven = mE;

  while (true) {
    if (isNaN(N) || N % 1 !== 0) {
      N = +prompt("N should be integer, enter N:");
    } else break;
  }

  while (true) {
    if (isNaN(M) || M % 1 !== 0) {
      M = +prompt("M should be integer, enter M:");
    } else if (M <= N) {
      M = +prompt("M should be greater then N, enter M:");
    } else break;
  }

  let sum = 0;
  for (N; N <= M; N++) {
    if (missEven && N % 2 === 0) {
      continue;
    }
    sum += N;
  }

  document.body.innerHTML += `
  <strong>HW#2</strong> <br>
  Сума цифр від ${startN} до ${M} = ${sum} <br>`;
  document.body.innerHTML += "<br>";
}

export default hw2;
