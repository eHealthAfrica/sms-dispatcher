/**
 * Created by ehealthafrica on 6/16/15.
 */

var config = require('../config/config'),
  Q = require('q'),
  nano = require('nano')(nanocfg()),
  couchdb = {};
var last_seq = 0;

function nanocfg() {
  return [config.db.url.protocol, config.db.auth.username, ':', config.db.auth.password, '@', config.db.url.uri, config.db.url.port].join('');
}

function create(dbName) {
  var deferred = Q.defer();
  nano.db.create(dbName, function (err, body) {
    if (err) {
      deferred.reject('Operation: nano.create(' + dbName + ') failed' + err.toString());
    } else {

      deferred.resolve(body);
    }
  });
  return deferred.promise;
}

couchdb.changes = function getFeed(dbName) {
  var deferred = Q.defer();
  var db = nano.use(dbName);
  return db.follow({since: 0, include_docs: true});
};

function _extractStockout (data){
  var xtract = {};
  if(data['doc'].facility){
    xtract['facilityName'] = data['doc'].facility.name;
    xtract['facilityPhone'] = data['doc'].facility.phone;
    xtract['product'] = data['doc'].productType.code;
    xtract['zone'] = data['doc'].facility.zoneUUID;
    xtract['ward'] = data['doc'].facility.wardUUID;
    xtract['lga']  = data['doc'].facility.lgaUUID;
    return xtract;
  }

}
function _extractCcuBreakDown (data){
  var xtract = {};

  xtract[facility] ='';
  xtract['facilityPhone'] = '';
  xtract['zone'] = data['doc'].facility.zoneUUID;
  xtract['ward'] = data['doc'].facility.wardUUID;
  xtract['lga']  = data['doc'].facility.lgaUUID;

  return xtract;
}
couchdb.extract = function(data, structure){
  var deferred = Q.defer();
  var xData;
  if(structure == 'stockout'){
    xData  = _extractStockout(data);
  }else if(structure == 'ccubreakdown'){
    xData  = _extraCcuBreakDown(data);
  }

  if(xData){
    deferred.resolve(xData);
  }else{
    deferred.reject('could not extract data');
  }
  return deferred.promise;
};

module.exports = couchdb;