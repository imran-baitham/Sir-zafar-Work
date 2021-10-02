// declarations of var let Const

// declarations of var

// var app = 'hellow world'
// var app = 'imran baitham'
// console.log(app)

// declarations of let

// let name = 'imran baitham'
// let name = 'salman'
// console.log(name)

// declarations of const

// const fruit = 'apple'
// const fruit = 'banana'
// console.log(fruit)

// ===============================
// scope of var let Const

// Globlly Scope of var

// var greeter = "hey hi";
// function newFunction() {
// 	var hello = "hello";
// }
// console.log(hello);

// var tester = "hey hi";
// function newFunction() {
// 	var hello = "hello";
// }
// console.log(tester)
// console.log(hello); // error: hello is not defined

// var greeter;
// console.log(greeter); // greeter is undefined
// greeter = "say hello"

// let greeter = "hey hi";
// let times = 4;

// if (times > 3) {
//     let greeter = "say Hello instead";
// }

// console.log(greeter)

// console.log(greeter) // "say Hello instead"

// var greeter;
// console.log(greeter); // greeter is undefined
// greeter = "say hello"

// var greeter = "hey hi";
// var times = 4;

// if (times > 3) {
//     var greeter = "say Hello instead";
// }

// console.log(greeter) // "say Hello instead"
// let greeting = "say Hi";
// let times = 4;

// if (times > 3) {
//      let hello = "say Hello instead";
//      console.log(hello);// "say Hello instead"
//  }
// console.log(hello) // hello is not defined

// ------------------------------FB Video-------------------------------------

// var is function scop and let and const is block sscop

// function ecmascript(isTrue) {
//      // function Scope
// 	if (isTrue) {
//           // block Scope
// 		let firstName = "imran";
// 		const lastName = "baitham";
// 		console.log("my name is " + firstName +' '+ lastName);
//           // End block Scope
// 	}
//      // End function Scope
// }

// ecmascript(true);

// ====================================
// var falt of run

var fullName = 'muhammad imran';//Globally Scope

if(true){
     this change to 
     var fullName = 'imran Khan'
     console.log(fullName)
}

console.log(fullName)

// let consdation of run
let Name = 'imran Ali';
//Globally scope so let,const is block so second run this code Globally...

if(true){
     let Name = 'imran baitham'
     console.log(Name)
     // fullname print here
     //let,const is block scope so first code is this run
}
console.log(Name)
// global scope print here
