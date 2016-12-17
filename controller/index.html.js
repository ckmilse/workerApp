var express = require('express');
var router = express.Router();

/* GET users listing. */
// router.get('/', function(req, res, next) {
//     console.log(234);
//   res.send('respond with a resource');
// });

var fs = require('fs');
var workerHttp = require('./../service/httpService.js');
var config = require('./../config/config.app.js');
// var paths = filePaths.getSync('app/scripts/');
module.exports = function(req, res, next) {
  // res.send('respond with a resource3333' + JSON.stringify(req.body));
  console.log(req);
  let code = req.query.code;
  //let url = `https://api.weixin.qq.com/sns/oauth2/access_token?appid=${config.appId}&secret=${config.secretID}&code=${code}&grant_type=authorization_code`;

  let url = 'https://api.weixin.qq.com/sns/oauth2/access_token?appid=' + config.appId + '&secret='+ config.secretID + '&code=' + code + '&grant_type=authorization_code';
  workerHttp.GET(url)
    .then(function(resData) {
        // JSON.parse(resData)
        // res.render('indexWorker', { title: 'Express' , bodyString: JSON.stringify(resData)});
        res.render('indexWorker', { title: 'Express' , bodyString: resData});
    },function(e) {
        console.log(e);
        res.render('indexWorker', { title: 'Express' , bodyString: 'error' + JSON.stringify(e)});
    });

};

// module.exports = function() {
//
// }
