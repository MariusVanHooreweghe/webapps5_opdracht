var express = require('express');
var router = express.Router();
let mongoose = require('mongoose');
let Promise = mongoose.model('Promise');
let Promisee = mongoose.model('Promisee');
let PromiseBundle = mongoose.model('PromiseBundle');
let jwt = require('express-jwt');
let auth = jwt({secret: process.env.PROMISE_BACKEND_SECRET, userProperty: 'payload'});

//get all promises
router.get('/API/promises/', auth, function(req, res, next){
  let query = Promise.find().populate('promisees');
  query.exec(function(err, promises){
    if (err){
      return next(err);
    }
    res.json(promises);
  });
});
//get all promises by promisebundle
router.get('/API/promisebundles/:promisebundle/promises/', auth, function(req, res, next){
  let query = PromiseBundle.find().populate('promises');//Promise.find().populate('promisees');
  query.exec(function(err, promisebundles){
    if (err){
      return next(err);
    }
    res.json(promisebundles);
  });
});
//param :promise
router.param('promise', function(req, res, next, id) {
  console.log("id bij param methode: "+id);
  let query = Promise.findById(id).populate('promisees');
  query.exec(function (err, promise){
    if (err) { return next(err); }
    if (!promise) { return next(new Error('not found ' + id)); }
    req.promise = promise;
    return next();
  });
});
//param :promisebundle
router.param('promisebundle', function(req, res, next, id) {
  let query = PromiseBundle.findById(id).populate('promises');
  query.exec(function (err, promiseBundle){
    if (err) { return next(err); }
    if (!promiseBundle) { return next(new Error('not found ' + id)); }
    req.promiseBundle = promiseBundle;
    return next();
  });
});
//get a promise
router.get('/API/promise/:promise', auth, function(req, res, next){
  res.json(req.promise);
});
//get a promisebundle
router.get('/API/promisebundle/:promisebundle', auth, function(req, res, next){
  res.json(req.promiseBundle);
});
//post a promise
router.post('/API/promisebundles/:promisebundle/promises/', auth, function(req, res, next){
  let promise = new Promise({name: req.body.name, description: req.body.description});
  promise.save(function(err, prom){
    if (err){return next(err);}
    req.promiseBundle.promises.push(prom);
    req.promiseBundle.save(function(err, rec){
      res.json(prom);
    })
  });
});
//post promisees of a promise
router.post('/API/promise/:promise/promisees', function(req, res, next) {
  let promee = new Promisee(req.body);
  promee.save(function(err, promisee) {
    if (err) return next(err);
    req.promise.promisees.push(promisee);
    req.promise.save(function(err, rec) {
      if (err) return next(err);
      res.json(promisee);
    })
  });
});
//delete a promise
router.delete('/API/promisebundle/:promisebundle/promise/:promise', 
auth, function(req, res, next) {
  const bundle = req.promiseBundle;
  bundle.promises = bundle.promises.filter(function(deletedPromise){
    let hmm = deletedPromise._id != req.promise.id;
    console.log("deletedPromise._id: "+deletedPromise._id);
    console.log("req.promise.id: "+req.promise.id);
    console.log(hmm);
    return deletedPromise._id != req.promise.id;
  })
  bundle.save(function(err){
    if (err) return next(err);
    res.json(bundle);    
  });
  Promise.remove(
    function (err) {
      if (err) return next(err);
      req.promise.remove(function(err) {
        if (err) { return next(err); }   
      });
    }
  );  
});

module.exports = router;
