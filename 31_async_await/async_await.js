console.log("Done with async await! You're a pro Anurag!");


// This function returns a promise:

async function anurag(){
    console.log("Inside the anurag function.");
    const response = await fetch('https://api.github.com/users');
    console.log('Before response');
    const users = await response.json();
    console.log('users resolved');
    return users;
}


console.log("Before calling func.");

let func_call = anurag();

console.log("After calling func.");
console.log(func_call);

// When the async function finishes executing then the
// promise is fulfilled such that this line is executed
// and the users json is printed.
func_call.then(data=> console.log(data)); 
console.log("Last line of this js file");
