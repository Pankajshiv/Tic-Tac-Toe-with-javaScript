// "use strict";
// console.log(z);
// var z=3;
// // undefined

// function p(){
// console.log("1")
// }
// p();
// function p(){
// console.log("2")
// }
// p();
// //2
// //2

// var test = 1;
// function functionHoisting() {
//   test = 10;
//   return;
// function test() {}
// }
// functionHoisting();
// console.log(test);
// // 1


// alert(a());
// function a() {
//   var b = function() {
//     return 3;
//   };
//   return b();
//   var b = function() {
//     return 8;
//   };
// }
// // function expression cannot hoisted in js
// // 3;

// alert(a());
// function a() {
//   function b() {
//     return 3;
//   }
//   return b();
//   function b() {
//     return 8;
//   }
// }

// // 8

function xyz(){
  var x=0,z=10;
  return function pqr(){
    console.log(x);
  }
}
xyz()();
