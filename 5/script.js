"use strict";
//var,let,const
// let a = 12;error
let a = 11; //modern js
console.log(`${a}`);
a = "abc";
console.log(`${a}`);
//Data Types
//Numbers, Objects, Booleans, String, undefined, null
//Objects
let myObj = {
  name: "Abd",
  age: 18,
  func: function myNum(num) {
    console.log(`my number is ${num}`);
  },
};
console.log(myObj);
console.log(myObj.age);
console.log(myObj.func(25)); //access with property name
document.addEventListener("click", function click() {
  //alert("Clicked");
  let conf = confirm("Are you sure?");
  console.log(conf);
});
let arr = [1, 2, 3, "21"];
console.log(arr);
//for loop
for (let index = 0; index < arr.length; index++) {
  console.log(`${index + 1}. ${arr[index]} and type is ${typeof arr[index]}`);
}
//for each
arr.forEach((element) => {
  console.log(element);
});
arr = [true, 1, 29, "abd", false];
//this
console.log(this);
//simple function
function myFunc(number) {
  console.log(`the number is ${this}`);
}
myFunc(); //undefined {this}
//arrow function
let myFunc1 = (number) => {
  console.log(`the number is ${this}`);
};
myFunc1();
//this refers to outer object
let myObj1 = {
  myFunc1: (number) => {
    console.log(`the number is ${this}`);
  },
};
myObj1.myFunc1();
//arrow function targets windows obj
//normal function will target object
let myObj2 = {
  a: this,
  myFunc1: function (number) {
    console.log(`the number is ${this}`);
  },
};
myObj2.myFunc1();
console.log(myObj2.a);
//arrow function targets windows obj

//TimeOut Function
setTimeout(() => {
  console.log(`i was executed after some time`);
}, 3000);
console.log("Iam Normal");
