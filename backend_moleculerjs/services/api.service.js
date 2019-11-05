'use strict'

const ApiGateway = require('moleculer-web')

module.exports = {
  name: 'api',
  mixins: [ApiGateway],

  // More info about settings: https://moleculer.services/docs/0.13/moleculer-web.html
  settings: {
    port: process.env.PORT || 3003,

    routes: [
      {
        path: '/api',
        whitelist: [
          // Access to any actions in all services under "/api" URL
          '**'
        ],
        aliases: {
          // 'REST items': 'items',
          'GET items/:id': 'items.get',
          'GET items': 'items.getAll',
          // 'REST orders': 'orders',
          'GET orders/:id': 'orders.get',
          'GET orders': 'orders.getAll',
          'GET parcels/order/:id': 'parcels.order'
        }
      }
    ],

    // Serve assets from "public" folder
    assets: {
      folder: 'public'
    }
  }
}
