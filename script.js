class Person {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  // Getter for name
  get name() {
    return this._name;
  }

  // Setter for name
  set name(value) {
    this._name = value;
  }

  // Getter for age
  get age() {
    return this._age;
  }

  // Setter for age
  set age(value) {
    this._age = value;
  }

  // Greeting method
  greet() {
    return `Hello, my name is ${this._name}, I am ${this._age} years old.`;
  }
}

class Employee extends Person {
  constructor(name, age, jobTitle) {
    super(name, age);
    this._jobTitle = jobTitle;
  }

  // Getter for jobTitle
  get jobTitle() {
    return this._jobTitle;
  }

  // Setter for jobTitle
  set jobTitle(value) {
    this._jobTitle = value;
  }

  jobGreet() {
    return `Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`;
  }
}

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
