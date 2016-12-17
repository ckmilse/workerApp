var express = require('express');
var router = express.Router();

/* GET users listing. */
// router.get('/', function(req, res, next) {
//     console.log(234);
//   res.send('respond with a resource');
// });

var workerHttp = require('./../service/httpService.js');
var config = require('./../config/config.app.js');
var getSign = require('./../service/wx_jsTicket_sign.js');
// var paths = filePaths.getSync('app/scripts/');
module.exports = function(req, res, next) {
  // res.send('respond with a resource3333' + JSON.stringify(req.body));
  var ulr = req.query.ajaxUrl;
  var publicJson = getSign(global.worker_Conf.jsapi_ticket, 'http://www.whatsmax.com/index.html');
  res.writeHeader(200, {
      'Content-Type':'application/json;charset=UTF-8',
      'Access-Control-Allow-Origin': '*.whatsmax.com'
  })
    // res.header('Access-Control-Allow-Origin', 'http://localhost:63342');
    // res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    // res.header('Access-Control-Allow-Headers', 'Content-Type');
    // res.header('Access-Control-Allow-Credentials','true');
  res.send(JSON.stringify(req.publicJson));


};

// module.exports = function() {
//
// }
