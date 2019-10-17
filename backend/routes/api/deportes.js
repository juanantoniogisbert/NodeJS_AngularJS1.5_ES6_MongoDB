var router = require('express').Router();
var mongoose = require('mongoose');
var Deporte = mongoose.model('Deporte');

var User = mongoose.model('User');
var auth = require('../auth');

router.get('/', function(req, res, next){
  Deporte.find().then(function(deporte){
    return res.json({deporte: deporte});
  }).catch(next);
});

router.get('/:slug', function(req, res, next) {
  Deporte.findOne(req.params.slug).then(function(deporte){
    if(!deporte){ return res.sendStatus(401); }
 
  return res.json({deporte: deporte});
  }).catch(next);
});


router.post('/', function(req, res, next) {
  // console.log(req.body);
  
  Deporte.create({type:req.body.deporte.type, name:req.body.deporte.name, price:req.body.deporte.price, devices:req.body.deporte.devices, canales:req.body.deporte.canales, pais:req.body.deporte.pais, calidad:req.body.deporte.calidad},
  function(err, deporte){
    if(err){
      if(err.code === 11000)
        res.json({err:"The name project is created"});
      else
        res.json({err:"Error when saving the project"});
    }else{
      res.json({err:false});
    }
  })
});

// Favorite an deporte
router.post('/:deporte/favorite', auth.required, function(req, res, next) {
  var IdDeporte = req.deporte._id;

  User.findById(req.payload.id).then(function(user){
    if (!user) { return res.sendStatus(401); }

    return user.favorite(IdDeporte).then(function(){
      return req.deporte.upFavCount().then(function(deporte){
        return res.json({deporte: deporte.toJSONFor(user)});
      });
    });
  }).catch(next);
});

// Unfavorite an deporte
router.delete('/:deporte/favorite', auth.required, function(req, res, next) {
  var IdDeporte = req.deporte._id;

  User.findById(req.payload.id).then(function (user){
    if (!user) { return res.sendStatus(401); }

    return user.unfavorite(IdDeporte).then(function(){
      return req.deporte.upFavCount().then(function(deporte){
        return res.json({deporte: deporte.toJSONFor(user)});
      });
    });
  }).catch(next);
});

router.get('/', auth.optional, function(req, res, next) {
  var query = {};
  var limit = 20;
  var offset = 0;

  if(typeof req.query.limit !== 'undefined'){
    limit = req.query.limit;
  }

  if(typeof req.query.offset !== 'undefined'){
    offset = req.query.offset;
  }

  if( typeof req.query.tag !== 'undefined' ){
    query.tagList = {"$in" : [req.query.tag]};
  }

  Promise.all([
    // req.query.author ? User.findOne({username: req.query.author}) : null,
    req.query.favorited ? User.findOne({username: req.query.favorited}) : null
  ]).then(function(results){
    // var author = results[0];
    var favoriter = results[1];

    // if(author){
    //   query.author = author._id;
    // }

    if(favoriter){
      query._id = {$in: favoriter.favorites};
    } else if(req.query.favorited){
      query._id = {$in: []};
    }

    return Promise.all([
      Deporte.find(query)
        .limit(Number(limit))
        .skip(Number(offset))
        .sort({createdAt: 'desc'})
        .populate('author')
        .exec(),
      Deporte.count(query).exec(),
      req.payload ? User.findById(req.payload.id) : null,
    ]).then(function(results){
      var deportes = results[0];
      var deportesCount = results[1];
      var user = results[2];

      return res.json({
        deportes: deprotes.map(function(deporte){
          return deporte.toJSONFor(user);
        }),
        deportesCount: deprotesCount
      });
    });
  }).catch(next);
});

module.exports = router;
