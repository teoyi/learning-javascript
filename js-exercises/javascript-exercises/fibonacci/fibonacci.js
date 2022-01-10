const fibonacci = function(num) {
    //Taking into account of values below 0 
    if (num < 0) return ('OOPS');
    if (num === 0) return 0;

    //Starting the fibonacci sequence, with two numbers 0 and 1
    let a = 0;
    let b = 1; 
    //Replacing values a and b such that b will hold the sum and a will hold the latter value
    for (i = 1; i < num; i++) {
        let temp = b; 
        b = a + b; 
        a = temp; 
    }
    return b 
}

module.exports = fibonacci
