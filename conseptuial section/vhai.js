// ! project -01

/* 80-100	A+	
70-79	A	
60-69	A-	
50-59	B	
40-49	C	
33-39	D	
0-32	F  */
/* 
let getNumber = 99;

if (getNumber > 32 && getNumber < 0) {
  console.log(getNumber, "You get F");
} else if (getNumber > 33 && getNumber < 39) {
  console.log(getNumber, "You get D.", "You have to read more and more");
} else if (getNumber > 40 && getNumber < 49) {
  console.log(getNumber, "You get C");
} else if (getNumber > 50 && getNumber < 59) {
  console.log(getNumber, "You get B");
} else if (getNumber > 60 && getNumber < 69) {
  console.log(getNumber, "You get A-");
} else if (getNumber > 70 && getNumber < 79) {
  console.log(getNumber, "You get A");
} else if (getNumber > 80 && getNumber < 100) {
  console.log(getNumber, "You get A+");
}
 */

var friends = ["rahim", "lalluuuuu", "kabir", "joyeeeeeeeeeeee"];
var oreehh = friends[0];
for (let i = 0; i < friends.length; i++) {
  const boss = friends[i];
  if (boss.length > oreehh.length) {
    oreehh = boss;
  }
}

console.log(oreehh);
