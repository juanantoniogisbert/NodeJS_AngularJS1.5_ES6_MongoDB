var router = require('express').Router();
var mongoose = require('mongoose');
var Deporte = mongoose.model('Deporte');

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
  console.log(req.body);
  
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

module.exports = router;
