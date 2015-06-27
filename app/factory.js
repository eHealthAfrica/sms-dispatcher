/**
 * Created by ehealthafrica on 5/26/15.
 */
var Q = require('q'),
    couchdb = require('./services/couchdb'),
    config = require('./config/config');

var factory = {};

/**
 * 1. listen for change in both stockout and ccebreakdown databases
 * needful: learn to listen for change in couchdb
 *          are there libraries that can help?
 * 2. onchange:
 * @type {{}}
 */
factory.watch = function(dbName, cb){
  var deffered = Q.defer();
  couchdb.changes()
};
module.exports = factory;