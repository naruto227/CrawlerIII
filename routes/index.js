var express = require('express');
var router = express.Router();
var sixrooms = require("../models/6Rooms.js");
var huajiao = require("../models/huajiao.js");
var Bilibli = require("../models/BliBli.js");
var douyu = require("../models/DouYu.js");


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/douyu', function (req, res, next) {
  if (douyu.DouYu()) {
    res.render('index', {title: '斗鱼 start running'});
  } else {
    res.render('index', {title: '斗鱼 already running'});
  }
});

router.get('/sixrooms', function (req, res) {
  if (sixrooms.SixRooms()) {
    res.render('index', {title: '六间房 start running'});
  } else {
    res.render('index', {title: '六间房 already running'});
  }
});

router.get('/bilibli', function (req, res, next) {
  if (Bilibli.Bilibli()) {
    res.render('index', {title: '哔哩哔哩 start running'});
  } else {
    res.render('index', {title: '哔哩哔哩 already running'});
  }
});

router.get('/huajiao', function (req, res) {
  if (huajiao.huajiao()) {
    res.render('index', {title: '花椒 start running'});
  } else {
    res.render('index', {title: '花椒 already running'});
  }
});

module.exports = router;
