/**
 * Created by ehealthafrica on 5/26/15.
 */

var factory = require('../app/factory');

describe('factory as a point for making external async calls', function(){
  it('should be an object', function(){
    expect(factory).toEqual(jasmine.any(Object));
  });

});