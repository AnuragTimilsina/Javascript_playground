// Type conversion and type correction

let myVar;
myVar = 34;
myVar = String(myVar);
console.log(myVar, typeof myVar);

// Type coercion

let mystr = "698";
let mynum = 34;

console.log(mystr+mynum);


let mystr = Number("698");
let mynum = 34;

console.log(mystr + mynum);