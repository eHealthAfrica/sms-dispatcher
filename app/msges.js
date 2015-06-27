/**
 * Created by ehealthafrica on 5/25/15.
 */

var request = require('request');
var telerivet = require('telerivet');
var q = require('q');
var config = require('./config/config');

var msges = {};

msges.type = '';
msges.template = {
  "stockout": "Hi, {{facilityName}} is out {{product}}. please take steps to re-stock them"
};

function templateEng(tpl, data) {
  var re = /\{\{(.*?)\}\}/g;
  var str = tpl.replace(re, function (i, token) {
    return data[token];
  });
  return str;
}
msges.prepare = function (data) {
  data.msg = templateEng(msges.template.stockout, data);
  return data;
};



msges.sendSms = function (data) {

  var deferred = q.defer();

  var smsOpts = {
    "phone_id": config.telerivet.PHONE_ID,
    "to_number": "+2348097772974",
    "content": data.msg,
    "api_key": config.telerivet.API_KEY
  };
  var opts = {
    method: "POST",
    json: smsOpts,
    uri: config.telerivet.SMS_URI
  };

  var settings = opts;

  request(settings, function(err, res, body){
    if (res) {
      deferred.resolve(body);
    }else{

      deferred.reject(err);
    }
  });

   return deferred.promise;
};

module.exports = msges;