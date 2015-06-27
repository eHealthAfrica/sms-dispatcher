/**
 * Created by ehealthafrica on 6/16/15.
 */

var couch = require('./services/couchdb');
var recipient = require('./services/recipients');
var msg = require('./msges');
var config = require('./config/config');
var Q = require('q');

//helper functions

var stockoutFeed = couch.changes(config.db.dbNames.stockout);
var ccuBreakDownFeed = couch.changes(config.db.dbNames.stockout);

stockoutFeed.follow();
//ccuBreakDownFeed.follow();

stockoutFeed.on('change', function (change) {

  couch.extract(change, 'stockout')
    .then(recipient.get)
    .then(msg.prepare)
    .then(msg.sendSms)
    .then(function(res){
      console.log(res);
    })
    .catch(function(err){ conosle.log(err)})

});

ccuBreakDownFeed.on('change',function(change) {
  recipient.get()
    .then(msg.prepare)
    .then(msg.sendSms)
    .catch(function(err){ conosle.log(err)})
});