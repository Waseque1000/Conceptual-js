function oddEvenSum(arr) {
  let evenSum = 0;
  let oddSum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      evenSum = evenSum + arr[i];
      //   console.log(arr[i]);
    } else {
      oddSum = oddSum + arr[i];
      //   console.log(arr[i]);
    }
  }
  //   console.log("Even sum:", evenSum, "Odd sum:", oddSum);
  return { evenSum, oddSum }; //! multiple value return korer jonno{ } aita use korte hoy
}

const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(oddEvenSum(arr));
console.log(oddEvenSum(arr).evenSum); // ! aita dile sudhu akta dekha jbe
