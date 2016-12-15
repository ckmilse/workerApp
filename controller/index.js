var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


// var paths = filePaths.getSync('app/scripts/');
module.exports = router;

// module.exports = function() {
//
// }
