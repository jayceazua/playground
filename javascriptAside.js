// Prototype Chain - "inheritance"

let person = {
  firstname: '',
  lastname: '',
  get greet() {
    return `${this.firstname} ${this.lastname}`;
  }
};

// object.create is a great way of setting up inheritance.
let john = Object.create(person); // inherits from the person object created above
john.firstname = "John";
john.lastname = "Doe";

let jane = Object.create(person); // inherits from the person object created above
jane.firstname = "Jane";
jane.lastname = "Doe";

console.log(jane.greet);
console.log(john.greet);
