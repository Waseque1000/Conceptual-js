// prime number cheak

//  1 and oi number chara vad g kora na gale oita prime hbe
function isPrime(number) {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

const vhai = isPrime(14);
console.log(vhai);
