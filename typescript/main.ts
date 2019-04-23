
// PascalCase classes
// properties and their datatypes

/**
 * Represents a CPTC student
 */
class Student {

    firstName:string;
    lastName:string;
    dateOfBirth:Date;
}

// create a new instance/object
// instantiate student object
let testStu:Student = new Student();
testStu.firstName = "Joe";
testStu.lastName = "Oritz";
// March 1st, 1980
testStu.dateOfBirth = new Date(1980, 3, 1);





// onload event
window.onload = function() {
    let regBtn = <HTMLElement>document.querySelector("main > button");
    regBtn.onclick = registerStudent;
}




function registerStudent() {
    let nextStudent:Student = getStudent();
    // if(isStudentValid) then 
    displayStudent(nextStudent);
}



/**
 * Gets user input from the form and wraps it in a 
 * student object
 */
function getStudent():Student {
    // create object
    let s = new Student();
    // must cast first to get .value 
    //let fName = (<HTMLInputElement>document.getElementById("first-name")).value;
    // s.firstName = fName;
    // same as above, just one less variable
    s.firstName = (<HTMLInputElement>document.getElementById("first-name")).value;
    s.lastName = (<HTMLInputElement>document.getElementById("last-name")).value;

    // TO DO: get date of birth
    return s;
}




// accept student as a parameter, the right type
function displayStudent(stu:Student) {
    alert(stu.firstName + " " + stu.lastName);
}






