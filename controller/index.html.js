var express = require('express');
var router = express.Router();

/* GET users listing. */
// router.get('/', function(req, res, next) {
//     console.log(234);
//   res.send('respond with a resource');
// });

var fs = require('fs');

// var paths = filePaths.getSync('app/scripts/');
module.exports = function(req, res, next) {
  // res.send('respond with a resource3333' + JSON.stringify(req.body));
  console.log(req);
  res.render('indexWorker', { title: 'Express' , bodyString: JSON.stringify(req.body)});
};

// module.exports = function() {
//
// }
