import { log } from "console";
import { Value } from "sass";

//type Aliases
type stringOrNumber = string | number;
type stringOrNumberArray = (string | number)[];
type artist = {
  name: string;
  active?: boolean;
  albums: stringOrNumberArray;
};
//literal types
let userName: "dave" | "john" | "amy";
userName = "Rechel";
userName = "john";

//function
const add = (a: number, b: number): number => {
  return a + b;
};

const logMag = (message: any): void => {
  console.log(message);
};
logMag("hello"); //'hello'
logMag(add(2, 3)); //5

//Aliases function
type mathFunction = (a: number, b: number) => number;
let muitiply: mathFunction = function (c, d) {
  return c * d;
};
//optional parameters
const addAll = (a: number, b: number, c?: number) => {
  //optional have to come last!!!
  if (typeof c !== "undefined") {
    return a + b + c;
  }
};
//rest parameters
const total = (a: number, ...nums: number[]): number => {
  return a + nums.reduce((acc, curr) => acc + curr);
};
logMag(total(10, 2, 3)); //15

//never type
const creatError = (errMsg: string) => {
  throw new Error(errMsg);
};
//use of never type , stop from returning  undefined
const numberOrstring = (value: number | string): number | "String" => {
  if (typeof value === "string") return "String";
  if (typeof value === "number") return value;
  return creatError("error");
};
