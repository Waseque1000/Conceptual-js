// ` calculate the avarage of all the number that is divisible by 3 from 1- n
// * 1st kaj holo sum ber kora
// * 2nd kaj holo count ber kora
// *3th kaj holo count ber kore avarage ber kora

function avarage(n) {
  let count = 0,
    sum = 0;
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0) {
      sum = sum + i;
      count = count + 1;
    }
  }

  const avg = sum / count;
  return avg;
}

const avg = avarage(10);
console.log(avg);
