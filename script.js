function Person(name, age) {
  this._name = name;
  this._age = age;
}

// Regular function, not arrow function
Person.prototype.greet = function() {
  console.log(`Hello, my name is ${this._name}, I am ${this._age} years old.`);
};

function Employee(name, age, jobTitle) {
  Person.call(this, name, age); // inherit properties
  this._jobTitle = jobTitle;
}

// Set up inheritance first
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

// Then add Employee methods
Employee.prototype.jobGreet = function() {
  console.log(`Hello, my name is ${this._name}, I am ${this._age} years old, and my job title is ${this._jobTitle}.`);
};

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
