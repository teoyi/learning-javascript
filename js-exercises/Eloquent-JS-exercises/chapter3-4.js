// Chapter 3 exercises 
// EX1: Minimum 
function min(a, b) {
    if (a > b) {
        return b;
    } else { 
        return a;
    }
}

console.log(min(3,-10))

// EX2: Recursion 
function isEven(a) {
    if (a < 0) {
        a = -1 * a;
    }

    if (a === 0) {
        return 'even'; 
    } else if (a === 1) {
        return 'odd'; 
    } else { 
        return isEven(a - 2)
    }
}

console.log(isEven(50))
console.log(isEven(75))
console.log(isEven(-1))

// EX3: Bean Counting 
function countBs(string) {
    count = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === 'B') {
            count += 1;
        } else {
            count += 0;
        }
    }
    return count 
}

console.log(countBs('BBBBeees'))

function countChar(string, x) {
    count = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === x) {
            count += 1;
        } else {
            count += 0;
        }
    }
    return count 
}

console.log(countChar('XXXXXXesssss', 'X'))

// Chapter 4 Exercises 
// EX1: The sum of a range 
function range(start, end) {
    let arr = [];
    for (i = start; i <= end; i++) {
        arr.push(i)
    }
    return arr;
}

console.log(range(1,10))

function sum(array) {
    count = 0; 
    for (i = 0; i < array.length; i ++) {
        count += array[i];
    }
    return count;
}
console.log(sum(range(1,10)))


function range2(start, end, step) {
    let arr = [];

    if (!step) {
        step = 1;
    } 

    if (start < end) {
        for (i = start; i <= end; i += step) {
            arr.push(i) 
        }
        return arr;
    } else {
        for (i = start; i >= end; i += step) {
            arr.push(i) 
        }
        return arr;
    }
}
console.log(range2(5, 2, -1))

// EX2: Reversing an array 
function reverseArray(array) {
    arr = [];
    for (i = array.length - 1; i >= 0; i-- ) {
        arr.push(array[i]);
    }
    return arr;
}
console.log(reverseArray([1,2,3,4,5]))

function reverseArrayInPlace(array) {
    for (i = 0; i < Math.floor(array.length/2); i++) { 
        let temp = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = temp; 
    }
    return array;
}

console.log(reverseArrayInPlace([1,2,3,4,5]))

// EX3: A list 

function arrayToList(array) {

}

function listToArray(list) {

}

function prepend(element, list) {

}

function nth(list, n) {

}