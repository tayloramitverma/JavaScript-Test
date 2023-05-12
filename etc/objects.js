/**
 * Object Deep and Shallow copy
 */
//Object literal notation:
let emp = {
  name: "Amit",
  salary: {
    fixed: 10000,
    variable: 1000,
  },
};

let newAssignEmp = Object.assign({}, emp);
let newSpreadEmp = { ...emp };

let newDeepEmp = JSON.parse(JSON.stringify(emp));
let newStructuredEmp = structuredClone(emp);

emp.name = "Divya";
emp.salary.fixed = 20000;

console.log("Orignal Emp", emp);
console.log("newAssignEmp", newAssignEmp);
console.log("newSpreadEmp", newSpreadEmp);
console.log("newDeepEmp", newDeepEmp);
console.log("newStructuredEmp", newStructuredEmp);

/**
 * Prototype Chain
 */

let person = {
  name: "Amit",
  getName() {
    console.log("this", this);
    console.log("first", emp);
    return `Hi ${this.name}`;
  },
};

console.log("person", person.getName());

//Constructor function:
function Person(name) {
  this.name = name;
  this.getName = function () {
    return "Get Name";
  };
}

const p1 = new Person("Amit");

console.log("Person", p1);

Person.prototype.greet = function () {
  return "Hi, I'm " + this.name + "!";
};

let greeting = p1.greet();

console.log("greeting", greeting);

/**
 *
 */

//Object.create():
const myPrototype = {
  prop1: "value1",
  prop2: "value2",
};

const myObjectCreate = Object.create(myPrototype);

console.log("myObjectCreate", myObjectCreate);

//class
class PersonNew {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.getFullName = function () {
      console.log(this.name);
    };
  }
}

const johnNew = new PersonNew("Amit", 30);

johnNew.getFullName();
