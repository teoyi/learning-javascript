const sumAll = function(min, max) {
    if (min < 0 || max < 0) {
        return 'ERROR';
    } 
    if (typeof min !== "number" || typeof max !== "number") {
        return 'ERROR';
    }
    if (min > max) {
        const temp = min; 
        min = max; 
        max = temp; 
    }
    let total = 0; 
    for (i = min; i < max + 1; i++) {
        total += i;
    }
    return total; 
}

module.exports = sumAll
