/**
 * Created by ehealthafrica on 5/25/15.
 */

var msges = require('../app/msges');

describe('msges', function(){
  it('should be truthy', function(){
    expect(msges).toBeTruthy();
  });
  describe('msges.type', function(){
    it('should be an object', function(){
      expect(msges.type).toBe(jasmine.any(Object));
    });
    it('should have properties', function(){
      expect(msges.hasOwnProperty('ccuBreakDown')).toBe(true);
      expect(msges.hasOwnProperty('stockOut')).toBe(true);
    });
  });
});