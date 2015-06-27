/**
 * Created by ehealthafrica on 5/25/15.
 */

var recipients = require('../app/services/recipients');
var config     = require('../app/config/config');

describe('recipients', function(){

  it('should be defined', function(){
    expect(recipients).not.toBeUndefined();
  });
  describe('recipients.level', function(){
    it('should be an object', function(){
      expect(config.recipientlevel).toEqual(jasmine.any(Object));
    });
  });
  describe('recipients.get', function(){
    it('should be truthy', function (){
      expect(recipients.get).toBeTruthy()
    });
    it('should be a function', function(){
      expect(typeof recipients.get).toBe('function');
    });
  });
  describe('recipients.bubble', function(){
    it('should be truthy', function (){
      expect(recipients.bubble).toBeTruthy()
    });
    it('should be a function', function(){
      expect(typeof recipients.bubble).toBe('function');
    });
    it('should return one of the elements of recipient.levels', function(){
      //expect(recipients.levels).toContain(recipients.bubble());
    });

  });

});