// Promise:
// - resolve.
// - reject.
// - pending.

function func1(){
    return new Promise(function(resolve, reject){
        setTimeout(() =>{
            const error = true;
            if (!error){
                console.log('Promise resolved!!!');
                resolve();
            }
            else{
                console.log('Your promise has not been resolved');
                reject('Promise rejected!!!');
            }
        }, 2000);
    })
}


func1().then(function(){
    console.log("Anurag: Thanks for resolving"); // If promise resolved.
}).catch(function(error){
    console.log("Anurag: m**i!" + error + ' Dis bsdk!'); // If promise not resolved.
});