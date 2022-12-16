// Find if anybody got A+ from your friends
// marks = [78, 82, 69]

function cheakGPA(arr) {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    // console.log("friens  " + i + "th marks  " + element);
    if (element >= 80) {
      return true; // ! ans just true hbe
      // ! return true, element; = element return korbe
    }
  }
  return false;
}

const gpa = cheakGPA([78, 82, 69]);
console.log(gpa);
