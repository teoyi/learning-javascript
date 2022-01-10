const ftoc = function(temp) {
  temp = ((temp - 32) * 5 / 9)*10
  return Math.round(temp)/10
}

const ctof = function(temp) {
  temp = ((temp / 5) * 9 + 32)*10
  return Math.round(temp)/10
}

module.exports = {
  ftoc,
  ctof
}
