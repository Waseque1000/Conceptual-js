function leapYEar(year) {
  if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    // ! leap year hote hole 3 ta condition lagbe
    //* 1st 4 diye divide hote hbe
    //? 2nd 100 diye divide hole 0 er soman hbe na x % 100 !== 0
    //* 3th 400 diye devide korle 0 hbe
    return "leap year ";
  } else {
    return " not leap year";
  }
}
console.log(leapYEar(2024));
