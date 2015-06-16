/**
 * Created by ehealthafrica on 6/16/15.
 */

var couch = require('./services/couchdb');

couch.changes('stockout')
  .then(function(changes){
    console.log(changes);
  })
  .catch(function(err){
    console.log(err);
  });