var express = require('express');
var router = express.Router();
var db = require('../db');

router.get('/',function(req,res){
  res.render('users/index',{
    users: db.get('users').value()
  });
});

router.get('/create',function(req,res){
  res.render('users/create')
});

router.get('/:id',function(req,res){
  var id = parseInt(req.params.id);
  var user = db.get('users').find({id:id}).value();
  res.render('/view',{user:user});
});

router.post('/create',function(req,res){
  db.get('users').push(req.body).write();
  res.redirect('/users');
});

module.exports = router;