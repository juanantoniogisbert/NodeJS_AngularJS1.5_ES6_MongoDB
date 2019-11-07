'use strict'

const DbService = require("../mixins/db.mixin");

module.exports = {
  name: 'music',
  mixins: [DbService("music")],

  settings: {
    fields: ['id', 'slug', 'name', 'decription', 'price']
  },

  actions: {

    get: {
      params: {
        id: 'string'
      },
      handler(ctx) {
				console.log('****ctx.params get*****');
        console.log(ctx.params);
        
				return this.findByID(ctx.params.id)
        .then(entity => {
          console.log('****entity get*****');
          console.log(entity);
          return entity;
        })
			}
    },	

    getAll: {
      handler(ctx) {
				console.log('****ctx.params*****');
				console.log(ctx.params);

				return this.adapter.find()
        .then(entity => {
          console.log('****entity*****');
          console.log(entity);
          return entity;
        })
			}
    },
  },

  methods: {
    findByID(id) {
	  return this.adapter.findOne({ "_id": id });
    },
    
		seedDB() {
			this.logger.info("Seed Musics DB...");
			return Promise.resolve()
      .then(() => this.adapter.insert({
        slug: "spotify",
        name: "Spotify",
        description: "holahola",
        price: 10
      }))
      .then(() => this.adapter.insert({
        slug: "tidal",
        name: "Tidal",
        description: "adiosadios",
        price: 9
      }))
    },
	},

	afterConnected() {
		return this.adapter.count().then(count => {
			if (count == 0) {
				this.seedDB();
			}
		});
	}
}
