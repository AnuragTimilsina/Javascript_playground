console.log("Welcome to ajax!!!")

let fetchBtn = document.getElementById("fetch-btn")
fetchBtn.addEventListener('click', buttonClickHandler)

function buttonClickHandler(){
    console.log("button clicked!")
    // Instantiate and xhr object
    const xhr = new XMLHttpRequest();

    // Open the object
    xhr.open('GET', 'anurag.txt', true)

    // What to do on progress
    xhr.onprogress = function(){
        console.log('On progress');
    }

    // What to do when response is ready
    xhr.onload = function() {
        if(this.status === 200){
            console.log(this.responseText);
        }
        else{
            console.log("Some error occured");
        }
    }
    // Send the request
    xhr.send();
}

