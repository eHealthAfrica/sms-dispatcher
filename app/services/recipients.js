/**
 * Created by ehealthafrica on 5/25/15.
 */
var http = require('http'),
    config = require('../config/config');

var recipients = {};

recipients.bubble = function(){

};

recipients.get = function(data){
  console.log(data);
  return data;
};

function _fetch(lga){
  var url = config.db.api.kanoconnect + 'lga=' + lga + 'position=' + config.recipientlevel['0'];
  return http.get(url)
    .catch(function(response){
      return response;
    })
}

module.exports = recipients;