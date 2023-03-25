/*
// Coding challenge 1
let markMass, markHeight, markBMI, johnMass, johnHeight, johnBMI, markHigherBMI;

// test 1
markMass = 78;
markHeight = 1.69;
johnMass = 92;
johnHeight = 1.95;
markBMI = markMass / markHeight ** 2;
johnBMI = johnMass / (johnHeight * johnHeight);
markHigherBMI = markBMI > johnBMI;
console.log(markBMI, johnBMI, markHigherBMI);

// test 2
markMass = 95;
markHeight = 1.88;
johnMass = 85;
johnHeight = 1.76;
markBMI = markMass / markHeight ** 2;
johnBMI = johnMass / (johnHeight * johnHeight);
markHigherBMI = markBMI > johnBMI;
console.log(markBMI, johnBMI, markHigherBMI);

// coding challenge 2
if (markHigherBMI) {
  console.log(`Mark's BMI (${markBMI}) is heighr than john's (${johnBMI})!`);
} else {
  console.log(`john's BMI (${johnBMI}) is higher than mark's (${markBMI})!`);
}
*/

/*
// coding challenge 3
let dolphinsScore1,
  dolphinsScore2,
  dolphinsScore3,
  koalasScore1,
  koalasScore2,
  koalasScore3,
  dolphinsAverage,
  koalasAverage;

// data 1
dolphinsScore1 = 96;
dolphinsScore2 = 108;
dolphinsScore3 = 89;
koalasScore1 = 88;
koalasScore2 = 91;
koalasScore3 = 110;

dolphinsAverage = (dolphinsScore1 + dolphinsScore2 + dolphinsScore3) / 3;
koalasAverage = (koalasScore1 + koalasScore2 + koalasScore3) / 3;

console.log(dolphinsAverage);
console.log(koalasAverage);

if (dolphinsAverage === koalasAverage) {
  console.log("Draw");
} else if (dolphinsAverage > koalasAverage) {
  console.log("Dolphins are the winners");
} else {
  console.log("Koalas are the winners");
}

// Data Bonus 1
dolphinsScore1 = 97;
dolphinsScore2 = 112;
dolphinsScore3 = 101;
koalasScore1 = 109;
koalasScore2 = 95;
koalasScore3 = 123;

dolphinsAverage = (dolphinsScore1 + dolphinsScore2 + dolphinsScore3) / 3;
koalasAverage = (koalasScore1 + koalasScore2 + koalasScore3) / 3;

console.log(dolphinsAverage);
console.log(koalasAverage);

if (dolphinsAverage === koalasAverage) {
  console.log("Draw");
} else if (dolphinsAverage > koalasAverage && dolphinsAverage >= 100) {
  console.log("Dolphins are the winners");
} else if (dolphinsAverage < koalasAverage && koalasAverage >= 100) {
  console.log("Koalas are the winners");
} else {
  console.log("There is no winner");
}

// Data Bounus 2
dolphinsScore1 = 97;
dolphinsScore2 = 112;
dolphinsScore3 = 101;
koalasScore1 = 109;
koalasScore2 = 95;
koalasScore3 = 106;

dolphinsAverage = (dolphinsScore1 + dolphinsScore2 + dolphinsScore3) / 3;
koalasAverage = (koalasScore1 + koalasScore2 + koalasScore3) / 3;

console.log(dolphinsAverage);
console.log(koalasAverage);

if (
  dolphinsAverage === koalasAverage &&
  dolphinsAverage >= 100 &&
  koalasAverage >= 100
) {
  console.log("Draw");
} else if (dolphinsAverage > koalasAverage && dolphinsAverage >= 100) {
  console.log("Dolphins are the winners");
} else if (dolphinsAverage < koalasAverage && koalasAverage >= 100) {
  console.log("Koalas are the winners");
} else {
  console.log("There is no winner");
}
*/

/*
// coding challenge 4
//const bill = 275;
//const bill = 40;
const bill = 430;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
);
*/
