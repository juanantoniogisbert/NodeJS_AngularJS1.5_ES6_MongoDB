var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
var slug = require('slug');
// var User = mongoose.model('User');


var DeporteSchema = new mongoose.Schema({
  slug: {type: String, lowercase: true, unique: true},
  name: String,
  type: String,
  price:  String,
  devices: String,
  canales: String,
  pais: String,
  calidad: String,
  countFav: {type: Number, default: 0}
  // description: String,
  // image: String,
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

DeporteSchema.methods.toJSONFor = function(){
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
    countFav: {type: Number, default: 0}
    // description: this.description,
    // image: this.image
  };
};

DeporteSchema.methods.upFavCount = function() {
  var deporte = this;

  return User.count({favorites: {$in: [deporte._id]}}).then(function(count){
    deporte.countFav = count;

    return deporte.save();
  });
};

mongoose.model('Deporte', DeporteSchema);
