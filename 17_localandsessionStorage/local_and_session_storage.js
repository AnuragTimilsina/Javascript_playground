console.log('Hello anurag, no matter what life throws at you. Keep going lad!!!');
let impArray = ['anurag', 'hero', 'ho'];

// Add a key value pair inside local storage.
localStorage.setItem('Name', 'Harry');
localStorage.setItem('Name2', 'Rohan');
localStorage.setItem('don_ho_yo', JSON.stringify(impArray));

// Clears the entire local storage
localStorage.clear();

// Clear a particular key_value pair
localStorage.removeItem('Name2');

// Retrive an item from the local storage
let name = localStorage.getItem('Name');
name = Json.parse(localStorage.getItem('don_ho_yo'));
console.log(name);

// sessionStorage.setItem('sessionName', 'sHarry');
// sessionStorage.setItem('sessionName2', 'sRohan');
// sessionStorage.setItem('sessionBakchodi', JSON.stringify(impArray));

