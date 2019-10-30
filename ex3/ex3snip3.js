var STUDENTS = {
    firstNames:["Andy"],
    lastNames:["Lb"],
    ages: [32],
    fieldOfStudy: ["Information Technology"],
    addNew:function (newperson) {
        STUDENTS.firstNames.push(newperson[0]);
        STUDENTS.lastNames.push(newperson[1]);
        STUDENTS.ages.push(newperson[2]);
        STUDENTS.fieldOfStudy.push(newperson[3]);
    }
};

//Write a JavaScript function called “addNew” to add the information of new students to the object using the following code:
 STUDENTS.addNew(["Marco", "Fr", 34, "Electrical Engineering"]);
 console.log(STUDENTS);

