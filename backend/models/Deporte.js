var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
var slug = require('slug');
var User = mongoose.model('User');


var DeporteSchema = new mongoose.Schema({
  slug: {type: String, lowercase: true, unique: true},
  name: String,
  type: String,
  price:  String,
  devices: String,
  canales: String,
  pais: String,
  calidad: String,
  countFav: {type: Number, default: 0},
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

DeporteSchema.plugin(uniqueValidator, {message: 'is already taken'});

DeporteSchema.pre('validate', function(next){
  if(!this.slug)  {
    this.slugify();
  }

  next();
});

DeporteSchema.methods.slugify = function() {
  this.slug = slug(this.name) + '-' + (Math.random() * Math.pow(36, 6) | 0).toString(36);
};

DeporteSchema.methods.upFavCount = function() {
  var deporte = this;

  return User.count({favorites: {$in: [deporte._id]}}).then(function(count){
    deporte.countFav = count;

    return deporte.save();
  });
};

DeporteSchema.methods.toJSONFor = function(user){
  // console.log("hola"+user);
  
  return {
    slug: this.slug,
    name: this.name,
    type: this.type,
    price: this.price,
    devices: this.devices,
    canales: this.canales,
    pais: this.pais,
    calidad: this.calidad,
    favorited: user ? user.isFavorite(this._id) : false,
    countFav: this.countFav
    // author: this.author.toProfileJSONFor(user)
  };
};

mongoose.model('Deporte', DeporteSchema);
