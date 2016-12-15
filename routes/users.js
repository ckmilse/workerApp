var express = require('express');

var router = express.Router();
var filePaths = require('filepaths');

var fs = require('fs');
var paths = filePaths.getSync('./controller/');
var controllers = {};
paths.forEach(function(item) {
    var key = item.replace('./controller/','').replace('.js','');
    controllers[key] = require('./.' + item);
    console.log(controllers);
});

/* GET home page. */
function indexController(req, res, next) {

  // res.render('index', { title: 'Express' });
    res.send('respond with a resource' + paths.join(';') + req.body + JSON.stringify(req));
}
router.get('/', indexController);
router.post('/', indexController);

module.exports = router;
