/**
 * Created by ehealthafrica on 5/25/15.
 */
var http = require('http'),
    config = require('../config/config'),
    Q = require('q');


var recipients = {};

recipients.bubble = function(){

};
recipients.ccode = "+234";
recipients.get = function(data){
  var body = '';
  var deferred = Q.defer();

  _fetch(data.lganame)
    .then(function(res){
      res.on('data', function(d){
        body += d;
      })
      res.on('end', function(){
       data.recipient = (JSON.parse(body))[0];
       deferred.resolve(data);
      })

    })
    .catch(function(err){
      console.log(err);
      deferred.reject(err);
    })
  return deferred.promise;
};

function _fetch(lga){
  var url = config.api.auth + '@' + config.api.kanoconnect;
  var options = {
    hostname: config.api.kanoconnect,
    path: '/api/contact/?lga=' + encodeURIComponent(lga) + '&position=' + encodeURIComponent(config.recipientlevel['0']['position']),
    headers: {
      'Authorization': 'Basic ' + new Buffer(config.api.auth).toString('base64')
    }
  };

  var deferred = Q.defer();
  http.get(options, deferred.resolve);
  return deferred.promise;
}

module.exports = recipients;