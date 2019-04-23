
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




// accept student as a parameter, with the student type
function displayStudent(stu:Student) {
    // give me the list item
    let studentLI:HTMLLIElement = document.createElement("li");

    // insert into list item element
    studentLI.innerText = stu.firstName + " " + stu.lastName;

    // onclick event handler
    studentLI.onclick = function() {
        
        // this triggers the function
        let agree = confirm("Are you sure you want to delete?");

        if(agree) {
            let currItem = <HTMLLIElement>this;
            currItem.remove();
        }
    }


    // give me unordered list that is a child of dive with id = roster
    // and append (add) the new list item element
    let list = document.querySelector("#roster > ul");
    list.appendChild(studentLI);

    
}






