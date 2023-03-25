'use strict';

function calcAge(birthyear) {
  const age = 2023 - birthyear;
  console.log(firstName);

  function printAge() {
    let output = `${firstName}, You are the ${age}, born in ${birthyear}`;
    console.log(output);

    if (birthyear <= 1981 || birthyear >= 1996) {
      var millenial = false;
      const firstName = 'Omar ';
      const str = `Oh, and you're not a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }

      output = 'New Output!';
    }
    // console.log(str);
    console.log(millenial);
    // add(2, 3);
    console.log(output);
  }
  printAge();

  return age;
}

const firstName = 'Abdo';
calcAge(2001);

// console.log(age);
// printAge();

console.log(me);
// console.log(job);
// console.log(year);

var me = 'abdo';
let job = 'student';
const year = 2001;

console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);

console.log(this);

const calcAge1 = function (birthyear) {
  console.log(2037 - birthyear);
  console.log(this);
};
calcAge1(2001);

const calcAge2 = birthyear => {
  console.log(2037 - birthyear);
  console.log(this);
};
calcAge2(2001);

const abdo = {
  year: 2001,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};
abdo.calcAge();

const matilda = {
  year: 2017,
};
matilda.calcAge = abdo.calcAge;
matilda.calcAge();

// const f = abdo.calcAge;
// f();

const abdo1 = {
  firstName: 'Abdo',
  year: 2001,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);

    const self = this;
    const isMillenial = function () {
      console.log(self.year >= 1981 && self.year <= 1996);
      // console.log(this.year <= 1981 || this.year >= 1996);
    };
    isMillenial();
  },
  greet: () => console.log(`Hey ${this.firstName}`),
};
abdo1.greet();
abdo1.calcAge();

const addExpr1 = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr1(2, 5);
addExpr1(2, 5, 8, 12, 10);

var addArrow1 = (a, b) => {
  console.log(arguments);
  return a + b;
};
// addArrow1(2, 5, 8);

let lastName = 'Shredam';
let oldLastName = lastName;
lastName = 'Albry';
console.log(lastName, oldLastName);

const abdo3 = {
  firstName: 'Abdulrhman',
  lastName: 'Shredam',
  age: 21,
};
const abdo4 = abdo3;
abdo4.lastName = 'Shre';
console.log(abdo3);
console.log(abdo4);

const abdo5 = {
  firstName: 'Abdulrhman',
  lastName: 'Shredam',
  age: 21,
};

const abdoCopy = Object.assign({}, abdo5);
abdoCopy.lastName = 'Shre';

console.log(abdo5);
console.log(abdoCopy);
