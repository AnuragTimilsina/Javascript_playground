console.log("Hello Anurag, keep going!!!");

//Single element selector:


let element = document.getElementById('first');
// element = element.className;
// element = element.childNodes;
// element = element.parentNode;
element.style.color = 'red';
element.innerHTML = '<b></b>';
element.innerText = 'Anurag is a good boy.';
console.log(element.innerText);

let sel = document.querySelector('#first');
sel = document.querySelector('.child');
sel = document.querySelector('div');

console.log(sel);


// Multi element selector:
let elems = document.getElementsByClassName('child');
console.log(elems[1]);

elems = document.getElementsByTagName('div');

console.log(elems);

Array.from(elems).forEach(element => {
    console.log(element);
    element.style.color = 'blue';
})

