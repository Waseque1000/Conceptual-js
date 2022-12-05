//! find lerger number
//? way 2
function way2FindNumber(num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    // console.log(num1);
    return num1;
  } else if (num2 > num1 && num2 > num3) {
    // console.log(num2);
    return num2;
  } else {
    // console.log(num3);
    // return "num3";
    return num3;
  }
}
way2FindNumber(30, 30, 30);
console.log(way2FindNumber(300, 20, 90));
