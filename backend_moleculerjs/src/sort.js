// sort fct on Date
const sortByDate = (a, b, cw = true) => {
  return cw ? new Date(a) - new Date(b) : new Date(b) - new Date(a)
}

// sort fct on Number
const sortByNumber = (a, b, ad = true) => {
  let aInt = parseInt(a)
  let bInt = parseInt(b)
  return ad ? aInt - bInt : bInt - aInt
}

// sort fct on String
const sortByString = (a, b, ad = true) => {
  return ad ? a.localeCompare(b) : b.localeCompare(a)
}

module.exports = {
  sortByDate,
  sortByNumber,
  sortByString
}