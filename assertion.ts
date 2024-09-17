type one = string;
type two = string | number;
type three = "hello";

let a: one = "hi cici";
let b = a as two; //less specific
let c = a as three; //more specific

const addAll = (a: number, b: number, c: "add" | "concat"): number | string => {
  if (c === "add") return a + b;
  return "" + a + b;
};
//Type 'string | number' is not assignable to type 'string'.
let myVal: string = addAll(2, 2, "concat") as string;
//be careful !!! ts see no problem, here we actually return a number
let nextVal: string = addAll(2, 2, "add") as string;

//assertio in DOM
const img = document.querySelector("img")!;
const img_2 = document.getElementById("#img") as HTMLImageElement;
const img_3 = <HTMLImageElement>document.getElementById("#img");
img.src = "sss";
img_2.src = "sss";
