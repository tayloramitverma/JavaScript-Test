"use strict"

// 1. this in Global context
console.log(this);

// 2. this inside a function
// function doSome(){
//     console.log(this);
// }

// doSome()

// const doSome2 = () => {
//     console.log(this);
// }

// doSome2();

// const doSome3 = function () {
//     console.log(this);
// }

// doSome3();

// 3. this inside an object method
// const person1 = {
//     name: "person1",
//     doSome: function() {
//         console.log(this.name);
//     }
// }

// person1.doSome();

// const person2 = {
//     name: "person2",
// }

// person1.doSome.call(person2);

// 4. this inside an arrow function
// const person3 = {
//     name: "person3",
//     doSome: () => {
//         console.log("Arrow this", this);
//     }
// }

// person3.doSome();

// undefined, because arrow functions do not have their own 'this'

// 5. this inside encoded laxical context

// const person4 = {
//     name: "person3",
//     doSome: function() {
//         console.log(this);
//         function inner(){
//             console.log("Inner Arrow this", this);
//         }
//         inner();
//     }
// }
// person4.doSome();