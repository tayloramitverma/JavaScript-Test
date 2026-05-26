console.time();

// =============================================================================
// OBJECT CLONING — shallow vs deep, and reference vs copy
// =============================================================================
//
// In JavaScript, objects are stored by REFERENCE. Variables hold a pointer
// to the same object in memory — not a separate copy of the data.
//
//   emp ──► { name, salary: { fixed, variable } }  ◄── newAssignOp (same pointer)
//
// "Shallow" copy: top-level properties are copied; nested objects are still shared.
// "Deep" copy: nested objects are duplicated too (new pointers at every level).

let emp = {
  name: "Vikash",
  salary: {
    fixed: 10000,
    variable: 1000,
  },
};

// --- 1) Reference assignment (NOT a clone) ---
// Both variables point to the SAME object. Mutating one affects the other.
let newAssignOp = emp;

// --- 2) Shallow clone ---
// Creates a new object; copies enumerable own properties one level deep.
// emp.salary and newObjAssign.salary still reference the SAME nested object.
let newObjAssign = Object.assign({}, emp);

// Spread {...emp} is also a shallow clone (same behavior as Object.assign for plain objects).
let newSpreadEmp = { ...emp };

// --- 3) Deep clone ---
// JSON trick: serializes to string, parses back → new object tree.
// Limitations: drops functions/undefined/Symbol; Date → string; Map/Set unsupported;
// circular references throw. Fine for plain JSON-like data like this example.
let newDeepEmp = JSON.parse(JSON.stringify(emp));

// structuredClone (modern): deep clone in the engine; supports Date, Map, Set, etc.
// Still cannot clone functions, DOM nodes, or some built-ins. Best default for deep copy.
let newStructuredEmp = structuredClone(emp);

// Mutations below show which clones are independent vs still linked.
emp.name = "Suraj"; // top-level string is replaced on emp only
emp.salary.fixed = 20000; // nested change: affects anything that still shares `salary`

console.log("Original Emp", emp);
console.log("newAssignOp Emp", newAssignOp); // name + salary.fixed both changed (same ref)
console.log("newObjAssign Emp", newObjAssign); // name unchanged; salary.fixed changed (shared nested)
console.log("newSpread Emp", newSpreadEmp); // same as Object.assign (shallow)
console.log("newDeep Emp", newDeepEmp); // fully independent snapshot before mutations
console.log("newStructured Emp", newStructuredEmp); // fully independent (like deep JSON here)

// Quick mental model after mutations:
// | Variable          | name     | salary.fixed |
// |-------------------|----------|----------------|
// | emp, newAssignOp  | Suraj    | 20000          |
// | newObjAssign, spread | Vikash | 20000          |
// | newDeepEmp, structuredClone | Vikash | 10000   |

// =============================================================================
// PROTOTYPE CHAIN — how objects inherit behavior
// =============================================================================
//
// Every object has an internal [[Prototype]] (accessed via __proto__ or
// Object.getPrototypeOf). Property lookup: own properties first, then walk the chain.
//
//   person ──► { name, getName } ──► Object.prototype ──► null

let person = {
  name: "Amit",
  getName() {
    // `this` is whoever called the method (here: person).
    console.log("this", this);
    // `emp` is from outer scope (closure) — not a property of person.
    console.log("first", emp);
    return `Hi ${this.name}`;
  },
};

console.log("person", person.getName());

// --- Constructor function + `new` ---
// `new Person("Amit")` does roughly:
//   1. Create empty object linked to Person.prototype
//   2. Run Person with this = that object
//   3. Return the object (unless constructor returns another object)

function Person(name) {
  this.name = name; // own property on the instance
  // Method defined INSIDE constructor → new function per instance (memory cost).
  this.getName = function () {
    return "Get Name";
  };
}

const p1 = new Person("Amit");

console.log("Person", p1);

// Methods on Person.prototype are shared by all instances (one function, many objects).
Person.prototype.greet = function () {
  return "Hi, I'm " + this.name + "!";
};

// greet is not on p1 directly; engine finds it on Person.prototype via the chain.
let greeting = p1.greet();

console.log("greeting", greeting);

// =============================================================================
// Object.create() — create object with a specific prototype
// =============================================================================
//
// myObjectCreate's [[Prototype]] is MyPrototype. Inherited props look like
// own props when reading, but delete only removes OWN properties.

const MyPrototype = {
  prop1: "value1",
  prop2: "value2",
};

const myObjectCreate = Object.create(MyPrototype);

// No own prop1 yet — delete is a no-op for own props; inherited prop1 remains.
delete myObjectCreate.prop1;

// To remove inherited data, change or delete on the prototype object itself.
delete MyPrototype.prop1;

console.log("myObjectCreate", myObjectCreate); // still has prop2 via prototype

// =============================================================================
// class — syntactic sugar over constructor + prototype
// =============================================================================
//
// class PersonNew { ... } is mostly equivalent to function PersonNew + prototype,
// with stricter rules (no hoisting like functions, must use new, etc.).

class PersonNew {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    // Same pattern as Person above: instance method (not on PersonNew.prototype).
    this.getFullName = function () {
      console.log(this.name);
    };
  }
  // If you wrote getFullName() { } here (no assignment), it would live on the prototype.
}

const johnNew = new PersonNew("Amit", 30);

johnNew.getFullName();

console.timeEnd();
