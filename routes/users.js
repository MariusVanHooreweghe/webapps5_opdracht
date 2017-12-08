var express = require('express');
var router = express.Router();
let mongoose = require('mongoose');
let User = mongoose.model("User");
let PromiseBundle = mongoose.model("PromiseBundle");
let jwt = require('express-jwt');
let passport = require('passport');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/checkusername', function(req, res, next) {
  // if (req.body.username) {
    User.find({username: req.body.username}, function(err, result) {
      if (result.length) {
        res.json({'username': 'alreadyexists'})
      } else {
        res.json({'username': 'ok'})
      }
    });
  // }
});
router.post('/register', function(req, res, next){
  if(!req.body.username || !req.body.password){
      return res.status(400).json(
        {message: 'Please fill out all fields'});
  } //don't trust your front-end!
  let promiseBundle = new PromiseBundle();
  promiseBundle.save(function(err, result){
    if (err){return next(err);}
  });
  var user = new User();
  user.username = req.body.username;
  user.setPassword(req.body.password);
  user.promiseBundle = promiseBundle._id;
  user.save(function (err){
      if(err){ return next(err); }
      return res.json({token: user.generateJWT(), promiseBundle: promiseBundle._id});
  });
});
router.post('/login', function(req, res, next){
  if(!req.body.username || !req.body.password){
      return res.status(400).json(
        {message: 'Please fill out all fields'});
  }
  passport.authenticate('local', function(err, user, info){
    if(err){ return next(err); }
    if(user){
      return res.json({token: user.generateJWT(), promiseBundle: user.promiseBundle});
    } else {
      return res.status(401).json(info);
    }
  })(req, res, next);
});
module.exports = router;
