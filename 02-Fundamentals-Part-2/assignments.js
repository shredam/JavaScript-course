"use strict";

function describeCountry(country, population, capitalCity) {
  const descibtion = `${country} has ${population} milion people and its capital city is ${capitalCity}`;
  return descibtion;
}

const descEgypt = describeCountry("Egypt", 104, "Cairo");
const descFinland = describeCountry("Finlad", 6, "Helsinki");
const descGermany = describeCountry("Germany", 83, "Berlin");

console.log(descEgypt, descFinland, descGermany);

function percentageOfWorld1(population) {
  return population / 79;
}

const percentEgypt1 = percentageOfWorld1(104);
const percentFinland1 = percentageOfWorld1(6);
const percentGermany1 = percentageOfWorld1(83);

console.log(percentEgypt1, percentFinland1, percentGermany1);

const percentageOfWorld2 = function (population) {
  return population / 79;
};

const percentEgypt2 = percentageOfWorld2(104);
const percentFinland2 = percentageOfWorld2(6);
const percentGermany2 = percentageOfWorld2(83);

console.log(percentEgypt2, percentFinland2, percentGermany2);

const percentageOfWorld3 = (population) => population / 79;

const percentEgypt3 = percentageOfWorld3(104);
const percentFinland3 = percentageOfWorld3(6);
const percentGermany3 = percentageOfWorld3(83);

console.log(percentEgypt3, percentFinland3, percentGermany3);

function describePopulation(country, population) {
  const countryPercentage = percentageOfWorld1(population);
  return `${country} has ${population} milion people, which about ${countryPercentage}% of the world`;
}

const descEgyptPopulation = describePopulation("Egypt", 104);
const descFinlandPopulation = describePopulation("Finalnd", 6);
const descGermanyPopulatin = describePopulation("Germany", 83);

console.log(descEgyptPopulation, descFinlandPopulation, descGermanyPopulatin);

const populations = [104, 6, 83, 10];
console.log(populations.length === 4);
const percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[3]),
];
console.log(percentages);

const neighbours = ["Lebya", "Sudan", "Jordan"];
neighbours.push("Utopia");
neighbours.pop();
if (!neighbours.includes("Germany")) {
  console.log("Probably not a central European country :D");
}
const index = neighbours.indexOf("Sudan");
neighbours[index] = "Republic of Sudan";
console.log(neighbours);

const myCountry = {
  country: "UAE",
  capital: "Abu Dhabi",
  language: "Arabic",
  population: 10,
  neighbours: ["Oman", "KSA", "Qatar"],
  describe: function () {
    console.log(
      `${this.country} has ${this.population} milion ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`
    );
  },
  checkIsland: function () {
    this.neighbours.length === 0
      ? (this.isIsland = true)
      : (this.isIsland = false);
  },
};

console.log(
  `${myCountry.country} has ${myCountry.population} milion ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`
);

myCountry.population += 2;
myCountry["population"] -= 2;

myCountry.describe();
myCountry.checkIsland();
console.log(myCountry);

for (let voter = 1; voter <= 50; voter++) {
  console.log(`voter number ${voter} is currently voting`);
}

const percentages2 = [];
for (let i = 0; i < populations.length; i++) {
  percentages2[i] = percentageOfWorld1(populations[i]);
}
console.log(percentages2);
console.log(percentages2.length === percentages.length);

const listOfNeighbours = [
  ["Canad", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];

for (let i = 0; i < listOfNeighbours.length; i++) {
  for (let x = 0; x < listOfNeighbours[i].length; x++) {
    console.log(`Neighbour: ${listOfNeighbours[i][x]}`);
  }
}

const percentages3 = [];
let i = 0;
while (i < populations.length) {
  percentages3[i] = percentageOfWorld1(populations[i]);
  i++;
}
console.log(percentages3);
