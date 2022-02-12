console.log("Welcome to the improvised version of JS!")

class Employee{
    constructor(givenName, givenExperience, givenDivision, givenPay){
        this.name = givenName;
        this.exp = givenExperience;
        this.division = givenDivision;
        this.pay = givenPay;
    }

    slogan(){
        return `I'm ${this.name} and I'm gonna replace you all!`;
    }

    raisePay(){
        this.pay = 1.10*this.pay;
        return `The new pay is ${this.pay}`;
    }

    // Static can be called without any the class instance:
    static add(a, b){
        return a + b;
    }
}


// Inheritance:
class Programmer extends Employee{
    constructor(givenName, givenExperience, givenDivision, language, github){
        super(givenName, givenExperience, givenDivision);
        this.language = language;
        this.github = github
    }

    favLanguage(){
        return `${this.name}'s fav lang is ${this.language}!!!`;
    }

    static multiply(a, b){
        return a * b;
    }
}

// anurag = new Employee("Anurag Timilsina", 3, "Machine Learning", 3000000);
// console.log(anurag);
// let new_pay = anurag.raisePay();
// console.log(new_pay);

rohan = new Programmer("Rohan", 3, "Software engineering", "Dart", "JhapaliChelo123");
console.log(rohan);
console.log(rohan.favLanguage());
