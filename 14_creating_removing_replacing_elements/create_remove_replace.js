console.log('Hello anurag, Keep going!!!');

let element = document.createElement('li');

// Add a class name to the li element.

element.ClassName = 'childul';
element.id = 'createLi';
element.setAttribute('title', 'mytitle');
element.innerHTML = "<b>Hello, I'm a auto-generated text!"

console.log(element);

let ul = document.querySelector('#createLi');
console.log(ul)

let elem2 = document.createElement('h3');
elem2.id = 'elem2';
elem2.className = 'elem2';
let tnode = document.createTextNode('This is a created Node for elem2');
elem2.appendChild(tnode);

element.replaceWith(elem2);
let myul = document.getElementById('myul');
myul.replaceChild(element, document.getElementById('fui'));
myul.removeChild(document.getElementById('lui'));
let pr = elem2.getAttribute('class');
console.log(pr)