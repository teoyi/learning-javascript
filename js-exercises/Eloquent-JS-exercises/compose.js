/*
Declare a function 'compose'.

'compose' takes two functions as inputs: 'funcA' and 'funcB'. 
'funcA' and 'funcB' each take one input 'x'.

'compose' returns a new function. This function takes in one input 'x'.

When invoked, this returned function returns the result of passing 
the input 'x' from 'funcA' to 'funcB'.
*/

// Your code here

compose = (a,b) => value => b(a(value))
  
  // Tests
  
function multiplyTwo(x) {
return x * 2;
}

function addOne(x) {
return x + 1;
}

const foo = compose(multiplyTwo, addOne);

let actual = foo(5);
let expected = 11;

if (actual === expected) {
console.log("Yay!");
} else {
console.log("Try again!");
}

actual = foo(100);
expected = 201;

if (actual === expected) {
console.log("Yay!");
} else {
console.log("Try again!");
}