'use strict'

// const DbService = require('moleculer-db')

const items = require('../data/items.json').items

const { sortItemsByWeight } = require('../src/items')

module.exports = {
  name: 'items',
  // mixins: [DbService],
  settings: {
    fields: ['id', 'name', 'weight']
  },

  // afterConnected() {
  //   this.actions
  //     .insert({ entities: items })
  //     .then(res => console.log(`${res.length} items inserted in memory`))
  //     .catch(err => console.error('items insert errot', err))
  // },

  actions: {
    /**
     * get an item
     *
     * @param {String} id - Item identifier
     */
    get: {
      params: {
        id: 'string'
      },
      handler(ctx) {
        return items.find(o => o.id === ctx.params.id)
      }
    },

    /**
     * get all items
     */
    getAll() {
      return items
    },

    /**
     * get all items sorted by weight
     *
     * @param {String} sort - Sort order true = ascending
     */
    getAllSortedByWeight: {
      params: {
        sort: 'boolean'
      },
      handler(ctx) {
        return sortItemsByWeight(items, ctx.params.sort)
      }
    }
  }
}
