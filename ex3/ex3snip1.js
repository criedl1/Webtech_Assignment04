/*
* Taking an object variable containing the first name, last name, and university name of one person,
* create a welcome message as follows: “Dear first-name last-name from university-name,
* welcome to the Web Technologies course.”
*/

let student = {firstName:"Christoph", lastName:"Riedl", uniName:"Uni Klagenfurt"};

function createMsg(student) {
    let msg = "Dear " + student.firstName + " " + student.lastName + " from " + student.uniName + " welcome to the Web Technologies course."
    return msg;
}

console.log(createMsg(student));

document.body.innerHTML += createMsg(student)
