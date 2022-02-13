console.log("Keep going anurag, you're on callback now!!!");

const students = [
    {name: "Anurag", subject: "MachineLearning"},
    {name: "Ashish", subject: "Rust"}
]


function enrollStudent(student, callback){
    setTimeout(function(){
        students.push(student);
        console.log("Student has been enrolled!!!");
        callback();
    }, 3000);
}


function getstudents(){
    setTimeout(function(){
        let str = "";
        students.forEach(function(student){
            str += `<li> ${student.name} </li>`
        });
        document.getElementById('students').innerHTML = str;
    }, 1000);
}


let newStudent = {name: "Mia", subject:"Python"}
enrollStudent(newStudent, getstudents);
getstudents();