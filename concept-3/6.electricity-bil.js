// Calculate Electricity bill
// For first 100 unit  5 tk per unit
// For more than 100 unit 6 tk for every unit more than 100
// For more than 200 unit 7 tk for every unit more than 200

/* 
250 
100 *5 
100-200 = 100 *6
50 * 7 */

function electricityBill(unit) {
  let bill;
  if (unit <= 100) {
    bill = unit * 5;
  } else if (unit <= 200) {
    const first100 = 100 * 5;
    const remaining = unit - 100; // ! unite % 100 ... same kotha
    const remainingCost = remaining * 6;
    bill = first100 + remainingCost;
  } else if (unit > 200) {
    const first100 = 100 * 5;

    const secound100 = 100 * 6;
    const remaining = unit - 200;
    const remainingBill = remaining * 7;
    bill = first100 + secound100 + remainingBill;
  }
  return bill;
}

const totalBill = electricityBill(230);
console.log(totalBill);
