var mongoose = require('mongoose');
var router = require('express').Router();
var passport = require('passport');
var User = mongoose.model('User');
var auth = require('../auth');

router.get('/user', auth.required, function(req, res, next){
  User.findById(req.payload.id).then(function(user){
    if(!user){ return res.sendStatus(401); }

    return res.json({user: user.toAuthJSON()});
  }).catch(next);
});

router.put('/user', auth.required, function(req, res, next){
  User.findById(req.payload.id).then(function(user){
    if(!user){ return res.sendStatus(401); }

    // only update fields that were actually passed...
    if(typeof req.body.user.username !== 'undefined'){
      user.username = req.body.user.username;
    }
    if(typeof req.body.user.email !== 'undefined'){
      user.email = req.body.user.email;
    }
    if(typeof req.body.user.nombre !== 'undefined'){
      user.nombre = req.body.user.nombre;
    }
    if(typeof req.body.user.bio !== 'undefined'){
      user.bio = req.body.user.bio;
    }
    if(typeof req.body.user.image !== 'undefined'){
      user.image = req.body.user.image;
    }
    if(typeof req.body.user.password !== 'undefined'){
      user.setPassword(req.body.user.password);
    }

    return user.save().then(function(){
      return res.json({user: user.toAuthJSON()});
    });
  }).catch(next);
});

router.post('/users/login', function(req, res, next){
  passport.authenticate('local', {session: false}, function(err, user, info){
    if(err){ return next(err); }

    if(user){
      user.token = user.generateJWT();
      return res.json({user: user.toAuthJSON()});
    } else {
      return res.status(422).json(info);
    }
  })(req, res, next);
});

router.post('/users/register', function(req, res, next){
  User.find({$or:[{nombre:req.body.user.nombre},{email:req.body.user.email},{username:req.body.user.username}],userSocial:null}).then(function(user){
    var user = new User();
    user.username = req.body.user.username;
    user.email = req.body.user.email;
    user.nombre = req.body.user.nombre;
    user.type = "client";
    user.setPassword(req.body.user.password);
    user.save().then(function(){
      return res.json({user: user.toAuthJSON()});
    }).catch(next);
  });
});

router.post('/users', function(req, res, next){
  var user = new User();

  user.username = req.body.user.username;
  user.email = req.body.user.email;
  user.nombre = req.body.user.nombre;
  user.setPassword(req.body.user.password);

  user.save().then(function(){
    return res.json({user: user.toAuthJSON()});
  }).catch(next);
});


router.post('/users/sociallogin', function(req, res, next){
  let memorystore = req.sessionStore;
  let sessions = memorystore.sessions;
  let sessionUser;
  for(var key in sessions){
    sessionUser = (JSON.parse(sessions[key]).passport.user);
  }

  User.findOne({ '_id' : sessionUser }, function(err, user) {
    console.log(err);
    console.log(user);
    if (err)
      return done(err);
    // if the user is found then log them in
    if (user) {
        console.log(user);
        user.token = user.generateJWT();
        return res.json({user: user.toAuthJSON()});// user found, return that user
    } else {
        return res.status(422).json(err);
    }
  });
});


//Conectar en el server//
router.get('/auth/github', passport.authenticate('github'));
router.get('/auth/github/callback',
  passport.authenticate('github',{
  successRedirect : 'http://localhost:3000/#!/auth/sociallogin',
  failureRedirect: '/' }));

module.exports = router;