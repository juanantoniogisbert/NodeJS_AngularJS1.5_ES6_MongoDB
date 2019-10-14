var router = require('express').Router();
var mongoose = require('mongoose');
var Deporte = mongoose.model('Deporte');

router.get('/', function(req, res, next){
  Deporte.find().then(function(deporte){
    return res.json({deporte: deporte});
  }).catch(next);
});

module.exports = router;
