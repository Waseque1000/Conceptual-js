// var hero = "Hero Alam";

// if (hero == "Hero1 Alam") {
//   console.log("marbo baguray las porbe maguray");
// } else if (hero == "Ananto Jalil") {
//   console.log(" ami sob pari");
// } else {
//   console.log(" maramari vlo na  ");
// }

// var money = 100;

// if (money > 100) {
//   console.log("oita kine nio ");
// } else if (money < 100) {
//   console.log("thak baad daw");
// } else if ((money = 100)) {
//   console.log(" wohhhhhh");
// } else {
//   console.log("aita onek kharap ");
// }

// // ! nested if = if er vitore if
// var tamin = 70;

// if (tamin > 0) {
//   if (tamin == 80) {
//     console.log("yesssss amii sai tamin");
//   } else {
//     console.log("vhai tamin na ");
//   }
// } else {
//   console.log("Negative");
// }
/* 
// * switch......

var PeopleName = "Lallu";
switch (PeopleName) {
  case "Rahim":
    console.log("Ohhhh tmi tahole Rahim ");
    break;
  case "labil":
    console.log("Ohh tmai e labib.. ");
    break;
  case "Lallu":
    console.log("Ohh tmai e labib naa ... tahole tmi ki lallu vut  ");
    break;
  case "kala":
    console.log(" kala chasma ... o kalak chasma  ");
    break;

  default:
    console.log(" dhur ai tomader nam e mone rakhte pari na ");
    break;
}
 */

// for (let i = 0; i < 10; i++) {

//   console.log(i);
// }

// !
var friends = ["rahim", "lalluuuuu", "kabir", "joyeeeeeeeeeeee"];
// console.log(friends[0]);

// for (let i = 0; i < friends.length; i++) {
//   var boss = friends[i];
//  console.log(boss);
// }
var temp = friends[0];

for (let i = 0; i < friends.length; i++) {
  const boss = friends[i];
  // console.log(boss);
  console.log(boss.length); // aita diya string er length ber kora hoyeche
  // * ai condition er mane holo aita diya ai array er vitore  kon nam ta boro ta ber korer jonno akta variable niye oi variable ta array er ist index diya variable dite hbe ..
  // * tar por if condition diya array > new variable dite hbe
  if (boss.length > temp.length) {
    temp = boss;
  }
}

console.log(temp);
