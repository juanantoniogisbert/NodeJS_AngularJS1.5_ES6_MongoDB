const { processOrder } = require('../src/orders')

module.exports = {
  name: 'parcels',
  actions: {
    /**
     * Set parcels for an order
     *
     * @param {String} order_id - Order identifier
     */
    order: {
      params: {
        id: 'string'
      },
      async handler(ctx) {
        try {
          let order = await ctx.call('orders.get', { id: ctx.params.id })
          let items = await ctx.call('items.getAll')
          return await processOrder(order, items)
        } catch (err) {
          console.error('Parcels err get order', err)
        }
      }
    }
  },

  /**
   * Events
   */
  events: {},

  /**
   * Methods
   */
  methods: {}
}
