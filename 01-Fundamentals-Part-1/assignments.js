const country = "Egypt";
const continent = "Africa";
const isIsland = false;
let population = 104;
let language;
language = "Arabic";
//country = "KSA";
const description1 =
  country +
  " is in " +
  continent +
  ", and it is " +
  population +
  " milion people speak " +
  language;
const description2 = `${country} is in ${continent}, and it is ${population} milion people speak ${language}`;
/* const numNeighbours = prompt(
  "How many neighbour countries does your country have?"
); */

console.log(country);
console.log(continent);
console.log(population);

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

console.log(population / 2);
population++;
console.log(population);
console.log(population > 6);
console.log(population < 33);
console.log(description1);
console.log(description2);

//population = 13;
//population = 130;
if (population > 33) {
  console.log(`${country}'s population is above average`);
} else {
  console.log(`${country}'s population is ${33 - population} below average`);
}

console.log("9" - "5"); // 4
console.log("19" - "13" + "17"); // "617"
console.log("19" - "13" + 17); // 23
console.log("123" < 57); // false
console.log(5 + 6 + "4" + 9 - 4 - 2); // 1143
/*
if (numNeighbours == 1) {
  console.log("Only 1 border");
} else if (numNeighbours > 1) {
  console.log("More than 1 border");
} else {
  console.log("No borders");
}

if (Number(numNeighbours) === 1) {
  console.log("Only 1 border");
}
*/

if (language === "English" && population < 50 && isIsland === false) {
  console.log(`you should live in ${country} :)`);
} else {
  console.log(`${country} does not meet your criteria`);
}

switch (language) {
  case "Chineese":
  case "Mandarin":
    console.log("MOST number of native speakers!");
    break;
  case "Spanish":
    console.log("2nd place in number of native speakers");
    break;
  case "English":
    console.log("3rd place");
    break;
  case "Hindi":
    console.log("Number 4");
    break;
  case "Arabic":
    console.log("5th most spoken language");
    break;
  default:
    console.log("Great language too :D");
}

console.log(
  population > 33
    ? `${country} population is above average`
    : `${country} population is below average`
);
