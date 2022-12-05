// ! // secound to minete
// let info = 140;
// let calculaeTime = Math.floor(info / 60);
// let secound = info % 60;
// console.log("Minutes   :", calculaeTime);
// console.log("Secound :", secound);

// odd or ever
// ! without reurn
// function OddEven(num) {
//   if (num % 2 === 0) {
//     console.log("even Number ");
//   } else {
//     console.log("odd number ");
//   }

// }
// OddEven(31);
// OddEven(312);

// ! with return

function evenOdd(number) {
  if (number % 2 == 0) {
    return "even Number";
  } else {
    return "odd Number ";
  }
}

console.log(evenOdd(71));
