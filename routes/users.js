var express = require('express');

var router = express.Router();
var filePaths = require('filepaths');

var fs = require('fs');

/* GET home page. */
function indexController(req, res, next) {
    var paths = filePaths.getSync('./../controller/');
  // res.render('index', { title: 'Express' });
    res.send('respond with a resource' + paths.join(';'));
}
router.get('/', indexController);

module.exports = router;
