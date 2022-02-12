let html;

html = "<h1> this is heading </h1>" + 
        "<p> this is my paragraph </p>";

html = html.concat(' This', ' is', ' Concatinated');
console.log(html);

console.log(html.length);
console.log(html.toLowerCase());
console.log(html.toUpperCase());
console.log(html)

console.log(html.indexOf('<'));
console.log(html.lastIndexOf('<'))
console.log(html.charAt(3));
console.log(html.endsWith('dsfsdfd'))
console.log(html.includes('h1'))
console.log(html.substring(1, 3))
console.log(html.slice(0, 4))

console.log(html.split(' '))
console.log(html.replace('this', 'it'))


let name = "Anurag";
let fruit1 = "Mango";
let fruit2 = 'PineApple';
let myHtml = `Hello ${name}
                <h1> This is heading </h1>
                <p> You like ${fruit1} and ${fruit2}
            `;
document.body.innerHTML = myHtml