
/*定时任务管理*/
 var schedule = require("node-schedule");
var fs = require('fs');
var workerHttp = require('./../service/httpService.js');
var config = require('./../config/config.app.js');
var getSign = require('./../service/wx_jsTicket_sing.js');
//用个临时全局变量
global.worker_Conf = config;

function refresh_SDK() {
    var getAccessTokenUrl = 'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential'
        + '&appid=' + global.worker_Conf.appId + '&secret=' + global.worker_Conf.secretID;
    console.log(getAccessTokenUrl);
    workerHttp.GET(getAccessTokenUrl)
        .then(function(resData) {
                if(typeof(resData) === 'string') {
                resData = JSON.parse(resData);
                }

                // JSON.parse(resData)
                // res.render('indexWorker', { title: 'Express' , bodyString: JSON.stringify(resData)});
                //   {
                //       "access_token": "lP0mChKVmgcR9yWZsLXG2AKTEKiaSMhyXbjIz9gvln9POdkStLyW-kqXG_jqLC7NqlQgONqp6tFRWOfMVuiV7eKTbUUjTNS-WamKoTEzqPUAoGn26uYl0YGb5yfZIZbjHBJgAEATNV",
                //       "expires_in": 7200
                //   }
                global.worker_Conf.access_token = resData.access_token;
                return workerHttp.GET('https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token=' + global.worker_Conf.access_token + '&type=jsapi')
            },function(e) {
                console.log(e);
        })
            .then(function(resData){
                //   res.render('indexWorker', { title: 'Express' , bodyString: 'error' + JSON.stringify(e)});
                    if(typeof(resData) === 'string') {
                        resData = JSON.parse(resData);
                    }
                    global.worker_Conf.jsapi_ticket = resData.ticket;
                    var publicJson = getSign(global.worker_Conf.jsapi_ticket, 'http://www.whatsmax.com/index.html');
                    console.log(publicJson);
                    fs.writeFile( '../public/weixin_jsconfig.json', publicJson, 'utf8');
                },function(e) {

            });
      ;
}


function access_token_sche() {
    var rule = new schedule.RecurrenceRule();
    　　rule.minute = 90;
　　var j = schedule.scheduleJob(rule, function(){
　　　　refresh_SDK()
　　});
}

module.exports = access_token_sche;
