console.log("You've reached the most used topic of javascript Anurag. Smash this b**ch!");

let myBtn = document.getElementById("myBtn");

let content = document.getElementById("content");

function getData(){
   url = "https://api.github.com/users";
   fetch(url).then((response)=>{
       console.log("Inside first then")
       return response.json();
   }).then((data)=>{
       console.log("Inside second then");
       console.log(data);
   })
}

function postData(){
    url = "http://dummy.restapiexample.com/api/v1/create";
    data = '{"name": "anuragDon69", "salary":"200000", "age":"21"}'
    params = {
        method:'post',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type' : 'application/json',
        },
        body: data,
    }
    fetch(url, params).then((response)=>{
        return response.json();
    }).then((data)=>{
        console.log(data);
    })
}

console.log("Before running getData");

getData(); 

console.log("After running getData");

postData();