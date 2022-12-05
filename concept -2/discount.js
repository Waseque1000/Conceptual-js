// * write a function that takes input the total price of the products you bougth  return the net price calculated according to the dic=scount table bellow
// ! discount er por koto tk dawya lagbe oita ber korte hbe
function findDiscound(total) {
  if (total >= 5000) {
    const discountPrice = total * (20 / 100);
    const netPrice = total - discountPrice;
    console.log(netPrice);
    // console.log("You will get  20% discount ");
  } else if (total >= 3000) {
    const discountPrice = total * (15 / 100);
    const netPrice = total - discountPrice;
    console.log(netPrice);
    // console.log("You will get 15% discont ");
  } else if (total >= 1000) {
    const discountPrice = total * (10 / 100);
    const netPrice = total - discountPrice;
    console.log(netPrice);
    // console.log("you will get 10% dic=scount ");
  } else {
    console.log(" No dincount ");
  }
}
findDiscound(1200);
