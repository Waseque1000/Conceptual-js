// ? write a functio that will take a radius of circle and will return the area of circle [Hint : area of circle = pii r*r]
function areaOfCercle(r) {
  const pi = 3.1416;
  const area = pi * r * r;
  return area.toFixed(2); // ! .tofixed likher jonno . er por koy ghor dekhave oitai likhe hbe
}

console.log(areaOfCercle(7));
