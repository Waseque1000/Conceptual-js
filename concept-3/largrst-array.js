// ? Find the largest element of an array
function largestElement(arr) {
  let largest = arr[0];
  for (const element of arr) {
    if (element > largest) {
      largest = element;
    }
  }
  return largest;
}

let arr = [3, 5, 4, 6, 7, 45, 12, 34];
console.log(largestElement(arr));
