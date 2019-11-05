const { sortByNumber, sortByString } = require('./sort')

// itemsSort = false => ascending
const sortItemsByName = (items, itemsSort = false) =>
  items.sort((a, b) => sortByString(a.name, b.name, itemsSort))

const sortItemsByWeight = (items, itemsSort = false) =>
  items.sort((a, b) => sortByNumber(a.weight, b.weight, itemsSort))

module.exports = {
  sortItemsByName,
  sortItemsByWeight
}
