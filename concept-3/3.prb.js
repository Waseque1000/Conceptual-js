//` count* number divisible by 3 from 1 - 20;
// 1 thake 20 porjonto 3 dara vag jay emon 3 ta songkha ase
// oi songkha amount ber korer jonno ei count use kora hoise

function divisibleBy3() {
  let count = 0;
  for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0) {
      count = count + 1;
    }
  }
  //   console.log(count);
  return count;
}
const find = divisibleBy3();
console.log(find);
