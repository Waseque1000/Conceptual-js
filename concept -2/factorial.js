// function factorial(number) {
//   let fact = 1;
//   for (let i = number; i >= 1; i--) {
//     fact = fact * i;
//   }
//   return fact;
// }
// // console.log(factorial(4));

// //! while
// function factorial(num) {
//   let result = 1;
//   let i = num;
//   while (i >= 1) {
//     result = result * i;
//     i--;
//   }
//   return result;
// }
// console.log(factorial(5));

// practise
function fact(number) {
  let result = 1;
  let i = number;
  while (i >= 1) {
    result = result * i;
    i--;
  }
  return result;
}

console.log(fact(3));
