const repeatString = function(string, n) {
    if (n < 0) {
        return 'ERROR'
    } else {
        return string.repeat(n)
    }
}

module.exports = repeatString
