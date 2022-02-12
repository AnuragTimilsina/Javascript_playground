console.log("Go lad go, you don't know how to quit, do ya?")

let today = new Date();

// console.log(typeof(today));

let otherDate = new Date('11-29-2000 05:45:05');
let flexibleDate = new Date('June 14 1983');
let standardDate = new Date('11/29/2022');

console.log(otherDate);
console.log(flexibleDate);
console.log(standardDate);

let day1;

day1 = otherDate.getDay();
day1 = otherDate.getDate();
day1 = otherDate.getMinutes();
day1 = otherDate.getSeconds();
day1 = otherDate.getHours();

console.log(day1);

day1 = otherDate.getTime();

