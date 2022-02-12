console.log("You have started oop!!!")

// The car class:
let car = {
    name: 'Maruti suzuki Alto 800',
    topSpeed:125,
    run: function() {
        console.log("The car is running!!!")
    }
}

// Creating a constructor for cars:
function GeneralCar(name, speed){
    this.name = name;
    this.topSpeed = speed;
    this.run = function(){
        console.log(`${this.name} is running!!!`)
    }
    this.compare = function(){
        console.log(`This car is slower by ${300 - this.topSpeed} kmph than Mercedes`)
    }
}

car1 = new GeneralCar('Nissan', 250);
car2 = new GeneralCar('Maruti Alto', 120);

console.log(car)

console.log(car1)

console.log(car2);