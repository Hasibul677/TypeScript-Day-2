## Learning Points
1. How to use Explicit Type (let a : string).
2. How to use Explicit Type with Union Type (let a : string | number).
3. How to use Dynamic/Any Types in TypeScript (let a : any).
4. How to use Function Type (let myFunction : Function).
5. How to use Optional parameter in a function (a?:string);
6. How to use default value in parameter in a function (a:string = "Hasibul");
7. How to define return and void in a function

## Function
let myFunction : () => void // no return required.


### Essay function
let funSing1: (a: number, b: number) => number; // that means it have a retuen type with number
we can change the parameter property name when we are using this function.
funSing1 = (x: number, y: number) => {
  return x * y;
};

funSing1(5, 6);

### Complex function

let calculation: (x: number, y: number, z: string) => number;

calculation = (x: number, y: number, z: string) => {
  if (z === "add") {
    return x + y;
  } else {
    return x - y;
  }
};
calculation(5, 6, "add");

let myFunction : (a: number, b: number) => number //  return required.

## Type Aliases
it means we can create our own type for reduce repeating code

### without aliases
const myDetails = (
  id: string | number,
  details: { name: string; age: number }
) => {
  console.log(`my name is ${details.name} and my id is ${id}`);
};
myDetails(12, {name:"hasibul", age: 24})

### with aliases
type stringOrNumber = string | number;
type detailsInfo = { name: string; age: number };
const myDetails1 = (id: stringOrNumber, details: detailsInfo) => {
  console.log(`my name is ${details.name} and my id is ${id}`);
};# TypeScript-Day-2


### Class Type

1. How to create class with explicit and union types, and how to use class as a class type in a array.