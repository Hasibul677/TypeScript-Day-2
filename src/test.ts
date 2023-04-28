// Explixit Type

//variable

let a: string;
let b: number;

//array
let c: string[] = []; // we can define a string array. but we need to assign a empty array for new operation

//object
let obj: object;

obj = {
  name: "Hasibul",
  age: 24,
  place: "Dhaka",
  job: true,
};

obj = [1, 2, 3]; // we can assign an array . because we know array is object in javascript
// we can define any kind of type in side object. because we can not assign specific type on object

let obj1: {
  name: string;
  age: number;
  job: boolean;
};

obj1 = {
  name: "Hasibul",
  age: 24,
  job: true,
};

// in this object we can assign only those type of value which one previous decleare in object

// union types

// variable

let aa: string | number;

aa = "test";
aa = 24;
//aa= true // not possible

// array

let arr: (number | string)[] = [];

arr.push("hasibul", 24);
//arr.push(true) // give error because not define boolen type

// object

let check: {
  name: string;
  age: number;
  job: boolean;
};

// Dynamic / any types

let aaa: any;

aaa = 1;
aaa = "Hasan";
aaa = true;

// dynamic or any types allow all type of value. only complex stage we will using this otherwise not

// Function

let testFun: Function;

testFun = () => {
  // console.log("define function !");
};

testFun();

// function with explict type

const myFun = (a: string, b: string, c: string = "shanto") => {
  // console.log(a, b, c);
};

myFun("hasibul", "hasan"); // here c?:string means optional
myFun("md", "hasibul", "hasan"); // here c:string = "shanto" means default falue

// return function

const myFun1 = (a: string, b: boolean): string => {
  return a + b;
};

// console.log(myFun1("hasibul", true));

// Type Aliases
// it means we can create our own type for reduce repeating code

// without aliases
const myDetails = (
  id: string | number,
  details: { name: string; age: number }
) => {
  console.log(`my name is ${details.name} and my id is ${id}`);
};
// myDetails(12, {name:"hasibul", age: 24})

// with aliases
type stringOrNumber = string | number;
type detailsInfo = { name: string; age: number };
const myDetails1 = (id: stringOrNumber, details: detailsInfo) => {
  console.log(`my name is ${details.name} and my id is ${id}`);
};
// myDetails1(12, { name: "Md Hasibul Hasan", age: 24 });

// Function Signatures

let funSing: () => void;

funSing = () => {
  console.log("without return");
};
// funSing();

// essay thing
let funSing1: (a: number, b: number) => number; // that means it have a retuen type with number
// we can change the parameter property name when we are using this function.
funSing1 = (x: number, y: number) => {
  return x * y;
};
funSing1(5, 6);

//complex function

let calculation: (x: number, y: number, z: string) => number;

calculation = (x: number, y: number, z: string) => {
  if (z === "add") {
    return x + y;
  } else {
    return x - y;
  }
};
calculation(5, 6, "add");

//
let user: (
  id: string | number,
  userinfo: { name: string; age: number }
) => void;
