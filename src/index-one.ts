// console.log("Hello world");

// let project = 5;

// let drive: string = "Fast";

// let notthing = null;
// let notExist = undefined;

// notExist = "99";
// notExist = 9;

// let now = new Date();

// let colours = ["red", "green", "blue"];

// let threeDimensions: string[][][] = [[["one", "two"]]];

// Define Objects
// let employee: {
//   firstName: string;
//   lastName: string;
//   age: number;
//   jobTitle: string;
// };

// employee = {
//   firstName: "John",
//   lastName: "Perter",
//   age: 23,
//   jobTitle: "Teacher",
// };

// Functions
// const add = (a: number, b: number): number => {
//   return a * b;
// };

// console.log(add(2, 8));

// const logger = (message: string): void => {
//   console.log(message);
// };

// Arrays
// let skills: (string | number)[] = [];

// skills[0] = "Problem solving";
// skills[1] = "programming";
// skills.push("Software Architecture");
// skills.push(300);
// console.table(skills);

// Tuples

// type Student = [string, boolean, number, Date];
// let frank: Student = ["brown", true, 3, new Date()];
// console.table(frank);

// Type Alias
// type Point = {
//   x: number;
//   y: number;
// };

// let pt: Point = { x: 100, y: 100 };

// let age: Point = {
//   x: 20,
//   y: 25,
// };

// INTERFACE
// interface Person {
//   id: number;
//   firstName: string;
//   lastName: string;
// }

// function getFullName(person: Person) {
//   return `${person.firstName} ${person.lastName}`;
// }

// let David = {
//   id: 123,
//   firstName: "David",
//   lastName: "John",
// };
// const fullName = getFullName(David);

// console.log(fullName);

// CLASS ANNOTATION

// class Person {
//   id: number;
//   firstName: string;
//   lastName: string;
//   constructor(id: number, firstName: string, lastName: string) {
//     this.id = id;
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }

//   getFullName(): string {
//     return `${this.firstName} ${this.lastName}`;
//   }
// }

// let person = new Person(34, "John", "Jack");
// console.log(person.getFullName());

// OR

// class Person {
//   constructor(
//     public id: number,
//     public firstName: string,
//     public lastName: string
//   ) {
//     this.id = id;
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }

//   getFullName(): string {
//     return `${this.firstName} ${this.lastName}`;
//   }
// }

// let person = new Person(34, "John", "Jack");
// console.log(person.getFullName());

// TYPE ASSERTION

// interface Employee {
//   name: string;
//   code: string;
// }

// // let employee = <Employee>{};
// or
// let employee = {} as Employee;

// employee.name = "Paul";

// PLANNING PRIJECT INHERITANCE
// let sample = [
//   ["Comedy", "238230", "Fear of a Black Hat", "03/06/1994", "Larry B. Scott"],
//   ["Animation", "130178411", "The Peanuts Movie", "06/11/2015", "Noah Schnapp"],
// ];

// console.log(sample[0][4]);

// NAIVE SOLUTION FOR CSV READER
// import fs from "fs";

// let films = fs
//   .readFileSync("films.csv", { encoding: "utf8" })
//   .split("\n")
//   .map((row: string): string[] => {
//     return row.split(",");
//   });
// let count: number = 0;
// let actor: string = "Bruce Willis";

// for (let film of films) {
//   // console.log(film[4]);
//   if (film[4] === "Bruce Willis") {
//     count++;
//   }
// }
// console.log(`${actor} appeared in ${count} films.`);
