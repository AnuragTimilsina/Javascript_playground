console.log('Keep going Anurag, You are the toughest!!!')

let cont = document.querySelector('.no');
cont = document.querySelector('.container');

console.log(cont.childNodes);
console.log(cont.children);


let nodeName = cont.childNodes[0].nodeName;
console.log(nodeName);

let nodeType = cont.childNodes[0].nodeType;
console.log(nodeType);

/*
Node types:
1. Element. 
2. Attribute.
3. Text Node. 
8. Comment.
9. Document.
10. docType.
*/ 

let container = document.querySelector('.container');

console.log(container.children[1].children[0].children);

console.log(container.firstChild);
console.log(container.firstElementChild);

console.log(container.childElementCount);

console.log(container.firstElementChild.parentNode);
console.log(container.firstElementChild.nextElementSibling);
console.log(container.firstElementChild.nextElementSibling.nextElementSibling);
//And sooooo onnnnn.