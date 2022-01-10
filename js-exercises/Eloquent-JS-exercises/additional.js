// function sayHi() {
//     console.log('Hello');
//     return 'Hi';
//   }
// let foo = sayHi();
// console.log(foo);
// console.log(foo);


// function foo() {
//     console.log('foo');
//     bar();
// }
// function bar() {
//     console.log('bar');
// }
// function baz(fn) {
//     console.log('baz');
//     fn();
// }
// baz(foo);

// function getNumber() {
//     return 5;
// }
// function invokeSomething(fn) {
//     return fn();
// }

// invokeSomething(getNumber);

function noReturn() {
    console.log('Print!');
}

let whatsMyReturn = noReturn();
console.log(whatsMyReturn);