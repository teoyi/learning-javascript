const palindromes = function(string) {
    modString = string.toLowerCase().replace(/[^A-Za-z]/g, "");
    return (
        modString 
            .split("")
            .reverse()
            .join("") === modString
    );
}

module.exports = palindromes
