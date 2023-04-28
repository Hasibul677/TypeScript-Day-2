"use strict";
// Explixit Type
//variable
let a;
let b;
//array
let c = []; // we can define a string array. but we need to assign a empty array for new operation
//object
let obj;
obj = {
    name: "Hasibul",
    age: 24,
    place: "Dhaka",
    job: true,
};
obj = [1, 2, 3]; // we can assign an array . because we know array is object in javascript
// we can define any kind of type in side object. because we can not assign specific type on object
let obj1;
obj1 = {
    name: "Hasibul",
    age: 24,
    job: true,
};
// in this object we can assign only those type of value which one previous decleare in object
// union types
// variable
let aa;
aa = "test";
aa = 24;
//aa= true // not possible
// array
let arr = [];
arr.push("hasibul", 24);
//arr.push(true) // give error because not define boolen type
// object
let check;
// Dynamic / any types
let aaa;
aaa = 1;
aaa = "Hasan";
aaa = true;
// dynamic or any types allow all type of value. only complex stage we will using this otherwise not
// Function
let testFun;
testFun = () => {
    // console.log("define function !");
};
testFun();
// function with explict type
const myFun = (a, b, c = "shanto") => {
    // console.log(a, b, c);
};
myFun("hasibul", "hasan"); // here c?:string means optional
myFun("md", "hasibul", "hasan"); // here c:string = "shanto" means default falue
// return function
const myFun1 = (a, b) => {
    return a + b;
};
// console.log(myFun1("hasibul", true));
// Type Aliases
// it means we can create our own type for reduce repeating code
// without aliases
const myDetails = (id, details) => {
    console.log(`my name is ${details.name} and my id is ${id}`);
};
const myDetails1 = (id, details) => {
    console.log(`my name is ${details.name} and my id is ${id}`);
};
// myDetails1(12, { name: "Md Hasibul Hasan", age: 24 });
// Function Signatures
let funSing;
funSing = () => {
    console.log("without return");
};
// funSing();
// essay thing
let funSing1; // that means it have a retuen type with number
// we can change the parameter property name when we are using this function.
funSing1 = (x, y) => {
    return x * y;
};
funSing1(5, 6);
//complex function
let calculation;
calculation = (x, y, z) => {
    if (z === "add") {
        return x + y;
    }
    else {
        return x - y;
    }
};
calculation(5, 6, "add");
//
let user;
