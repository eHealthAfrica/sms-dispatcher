/**
 * Created by ehealthafrica on 6/16/15.
 */

var couch = require('./services/couchdb');
var config = require('./config/config');
var Q      = require('q');

var stockoutFeed = couch.changes(config.db.dbNames.stockout);

stockoutFeed.follow();

stockoutFeed.on('change', function(change){
  console.log(change);
});
