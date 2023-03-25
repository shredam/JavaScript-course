// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// Coding challenge

// 1) Understanding the problem
// - Array transformed to string separated by ...
// - what is the x days? index + 1

// 2) Breaking up into sub-problems
// - transform array into string
// - transform each element to string with C
// - Strings need to contain day
// - Add ... between elements and start and end of string

const printForecast = function (arr) {
  let string = '...';
  for (let i = 0; i < arr.length; i++) {
    string += ` ${arr[i]}C in ${i + 1}days ...`;
  }
  return string;
};

console.log(printForecast([17, 21, 23]));
