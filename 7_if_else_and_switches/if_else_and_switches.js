console.log('this is tutorial 8');
const age = 21;


//Simple if else:
if (age==21){
    console.log("You're an adult asshole!!!");
}

else if(age<21){
    console.log("Dudh puina jau vai.");
}

else{
    console.log("Budo vaisakis vai!!!");
}


// Value and Type check:
const age2 = '21';

if (age2 === 21){
    console.log("Both type and values of a variaable is equal")
}
else{
    console.log("Type was not equal");
}


// Undefined check
const test_var = 69;

if (typeof test_var !== 'undefined'){
    console.log('var is Defined');
}
else{
    console.log('var is Undefined');
}

// Boolean operators in if-else:
 const drives = true;

 if (drives && age>=18){
     console.log("You are eligible to drive!");
 }

else{
    console.log("You're not eligible to drive");
}

if (drives || age>=18){
    console.log("You are eligible to drive!");
}

else{
   console.log("You're not eligible to drive");
}

// Switch case: 

switch (age){
    case 18:
        console.log("You're 18!");
        break;
    case 28:
        console.log("You're 28!");
        break;
    case 38:
        console.log("You're 38!");
        break;
    default:
        console.log("Fuck YOu!");
        break;
}

