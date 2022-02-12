console.log("You reached object prototype! Good going lad!!! You're the real chad!!!");


// Object literal: Object.prototype:

let obj = {
    name: "anurag",
    nick: "Alcohol_repels_bugs",
    address: "Mars",
}

console.log(obj)


// Constructor:
function obj2(givenName){
    this.name = givenName;
}

obj2.prototype.getName = function (){
    return this.name;
}

obj2.prototype.setName = function(newName){
    this.name = newName;
}

let newObj = new obj2("Hari Wagle");

console.log(newObj);