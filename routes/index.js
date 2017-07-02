const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets, showForm: true } );
});

router.get('/users/:name', function(req, res,next) {
  var list = tweetBank.find({name: req.params.name});
  list.map(function(tweet){
  	res.render('index',{tweets: list})
  })
});

router.get('/tweets/:id', function(req, res, next){
	var add1 = tweetBank.find({id: Number(req.params.id)});
	res.render('index', {tweets: add1});
});

router.post('/tweets', function(req, res) {
  var name = req.body.name;
  var text = req.body.text;
  console.log("content", text);
  tweetBank.add(name, text);
  res.redirect('/');
});

// router.get('/stylesheets/style.css', function(req, res){
// 	res.sendFile('/stylesheets/style.css', {root : __dirname + '/../public'});
// });  This is just for one path should not be use for all the paths

module.exports = router;