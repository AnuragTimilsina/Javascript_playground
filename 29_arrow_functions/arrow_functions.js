console.log("OMG, you reached arrow functions. You are unstable Anurag!!!");

// Arrow Functions:

// Creating a regular function:
const normal_func = function(){
    console.log("This is a normal function");
}

// Converting it to an arrow function:
const arrow_func = ()=>{
    console.log("This is an arrow function");
}

arrow_func();
normal_func();

// Normal function returning something:
const greet = function(){
    return "Namaskar";
}

// Arrow function's return:
const arrow_great = ()=> "=>Namaskar";

console.log(greet());
console.log(arrow_great());

const greet_arrow = (name) => `Good morning, ${name}`;

console.log(greet_arrow("Anurag"));


