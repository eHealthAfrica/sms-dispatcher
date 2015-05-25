/**
 * Created by ehealthafrica on 5/25/15.
 */

var recipients = require('../app/recipients');

describe('recipients', function(){

  it('should be defined', function(){
    expect(recipients).not.toBeUndefined();
  });
  describe('recipients.level', function(){
    it('should be an object', function(){
      expect(recipients.levels).toEqual(jasmine.any(Object));
    });
    it('should have at least one property', function(){
      expect(recipients.levels).toContain({});
    });
  });
  describe('recipients.set', function(){
    it('should be truthy', function (){
      expect(recipients.set).toBeTruthy()
    });
    it('should be a function', function(){
      expect(typeof recipients.set).toBe('function');
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
      expect(recipients.levels).toContain(recipients.bubble());
    });
    
  });

});