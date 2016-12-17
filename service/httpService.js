/*
1.提供http常用方法供其他模块调用

*/


const http = require("http");
const https = require('https');
module.exports = {
    GET: function(url) {
        // console.log(url);
        let chooseHttp = url.indexOf('https') > -1 ?  https : http;
        return new Promise(function(resolve, reject) {
            chooseHttp.get(url,(res)=>{
                let resData = "";
                res.on("data",(data)=>{
                    resData += data
                })

                res.on("end",()=>{
                    resolve(resData);
                })
            }).on("error",(e)=>{
                reject(e);
            })
        });
    }
}
