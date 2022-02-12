function curse(name){
    console.log("F**k you ${name}, You're a real bitch!");
    return ("F**k you " + name + " You're a real bitch!");
}

let name = "Jane";
let name2 = "Susan";

curse(name);
// curse(name2);
let curse1 = curse(name);
console.log(curse1);


// Function inside a object:
const myobj = {
    company: "Rockstar",
    game: function(){
        return "GTA 5";
    }
}

console.log(myobj.game())

//for each:
arr = ['fruit', 'vegetable', 'furniture'];

arr.forEach(function(element, index, array){
    console.log(element, index, array);
});

