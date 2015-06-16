/**
 * Created by ehealthafrica on 6/16/15.
 */

var config = require('../config/config'),
    Q = require('q'),
    nano = require('nano')(config.db.url);


couchdb = {};

function create (dbName){
  var deferred = Q.defer();
  nano.db.create(dbName, function(err, body){
    if(err){
      deferred.reject('Operation: nano.create('+ dbName +') failed' + err.toString());
    }else{
      deferred.resolve(body);
    }
  });
  return deferred.promise;
}

function follow(db){
  var deferred = Q.defer();
  var feed = db.follow();

  feed.on('change', function(change){
    deferred.resolve(change);
  });
  feed.on('error', function(err){
    deferred.reject(err);
  });

  return deferred.promise;
}

couchdb.changes = function(dbName){
 return  create(dbName)
   .then(follow)
};


module.exports = couchdb;