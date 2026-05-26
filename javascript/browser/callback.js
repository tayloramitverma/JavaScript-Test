/**
 * Callback pattern — async control flow before Promises
 * Browser: open callback-students.html
 *
 * enrollStudent pushes to array after 1s, then calls callback.
 * getStudents reads list after 5s more and renders to DOM.
 * Shows "callback hell" risk when chaining many async steps.
 */

const students = [
  { name: "harry", subject: "JavaScript" },
  { name: "Rohan", subject: "Machine Learning" },
];

function enrollStudent(student, callback) {
  setTimeout(function () {
    students.push(student);
    console.log("Student has been enrolled");
    callback();
  }, 1000);
}

function getStudents() {
  setTimeout(function () {
    let str = "";
    students.forEach(function (student) {
      str += `<li>${student.name}</li>`;
    });
    document.getElementById("students").innerHTML = str;
    console.log("Students have been fetched");
  }, 5000);
}

const newStudent = { name: "Sunny", subject: "Python" };

enrollStudent(newStudent, getStudents);
