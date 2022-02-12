console.log("This is async programming!!!")

setTimeout(() =>{
    for(let index=0; index<4004; index++){
        const element = index;
        console.log("This is index number: " + index);
    }
}, 100)
console.log('Done printing...')