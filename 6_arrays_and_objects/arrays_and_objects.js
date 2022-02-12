const marks = [41, 69, 72, 81, 23, 95, 94];
const fruits = ['Orange', 'Apple', 'Pineapple'];
const mixed = ['str', 89, [3, 5]];

const arr = new Array(23, 123, 21, 'Orange');
console.log(arr);
console.log(mixed); 
console.log(fruits[1]);

console.log(arr.length)
console.log(Array.isArray('dfdf'))
arr[0] = 'harry';
let arr_element = arr[0];
console.log(arr);

console.log(marks);
let value = marks.indexOf(69);
console.log(value)

// Mutating or modifying arrays:
marks.push(314321);
marks.unshift(3443325);
console.log(marks);

marks.pop();
console.log(marks);

marks.splice(1, 2);
marks.reverse();
marks.concat(marks2);
console.log(marks);

let marks2 = [1, 2, 3, 4, 5, 6, 7];
marks = marks.concat(marks2);
console.log(marks);


//Objects:

let myobj = {
    'first name': 'harry',
    channel: 'CodeWithHarry',
    isActive: true,
    marks: [1,2,3,4,5],
}

console.log(myobj);
console.log(myobj['first name']);
console.log(myobj.channel);
console.log(myobj['channel']);

