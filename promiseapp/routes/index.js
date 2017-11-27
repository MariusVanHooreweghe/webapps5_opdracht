var express = require('express');
var router = express.Router();
let mongoose = require('mongoose');
let Promise = mongoose.model('Promise');
let User = mongoose.model('User');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/API/promises/', function(req, res, next){
  Promise.find(function(err, promises){
    if (err){
      return next(err);
    }
    res.json(promises);
  });
});
router.post('/API/promises/', function(req, res, next){
  let promise = new Promise(req.body);
  promise.save(function(err, rec){
    if (err){return next(err);}
    res.json(rec);
  });
});
module.exports = router;
