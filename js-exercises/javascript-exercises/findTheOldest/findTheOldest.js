let findTheOldest = function(array) {
    array.sort((a, b) => a.yearOfBirth < b.yearOfBirth ? -1 : 1)
    array.reduce((oldest, people) => { 
        
    })
}

module.exports = findTheOldest
