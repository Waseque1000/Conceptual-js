// function findlergest(num1, num2, num3) {
//   if (num1 > num2 && num1 > num3) {
//     // console.log(num1);
//     return num1;
//   } else if (num2 > num1 && num2 > num3) {
//     // console.log(num2);
//     return "num2", num2;
//   } else {
//     // console.log(num3);
//     return num3;
//   }
// }

// console.log(findlergest(2, 5, 3));
// findlergest(231, 334, 45);

let car = {
  brand: " tesla",
  model: "3g",
  weight: "980gk",
  seating: "5 adult",
  start() {
    // console.log("car is starting"); // ! aita dile log a undefine dekhabe
    return "car is starting"; // ! aita dile return er man show korbe
  },
};
// ! dot notation
// console.log(car.start());

// * bracket notation
// console.log(car["brand"]);
// console.log(car["start()"]);
console.log(car);
car.model = 4;
console.log(car);
