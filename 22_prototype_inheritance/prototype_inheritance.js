console.log("Well done, you have reached the prototype inheritance!!!");

const proto = {
    slogan: function(){
        return `Fuck this company!`;
    },
    changeName: function(newName){
        this.name = newName;
    },
}

// This creates a new object:
const anurag = Object.create(proto);
anurag.name = "Anurag";
anurag.role = "Programmer";

// This also creates a new object:

const anurag2 = Object.create(proto, {
    name: {value: "Anurag", writable: true},
    role: {value: "programmer"},
})

anurag2.changeName("Anurag2")
console.log(anurag2);

// Employee constructor:

function Employee(name, pay, exp){
    this.name = name;
    this.pay  = pay;
    this.exp = exp;
}

// Slogan
Employee.prototype.slogan = function(){
    return `Fuck this company! Regards, ${this.name}`;
}

let emp1 = new Employee("John", 114000, 3);
console.log(emp1);

// Here comes the programmer in emp class
function Programmer(name, pay, exp, language){
    Employee.call(this, name, pay, exp);
    this.language = language;
}

// So, applying inheritance!
Programmer.prototype = Object.create(Employee.prototype);
// Manually setting the constructor
Programmer.prototype.constructor = Programmer;

rohan = new Programmer("Rohan", 120000, 4, "Dart");
console.log(rohan);