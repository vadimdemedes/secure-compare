/**
 * Dependencies
 */

var compare = require('./');

require('chai').should();


/**
 * Tests
 */

describe ('secure-compare', function () {
  it ('should return true if the strings are identical', function () {
    compare('abc', 'abc').should.equal(true);
  });

  it ('should return true if the strings are identical in utf8', function () {
    compare('你好世界', '你好世界').should.equal(true);
  });

  it('should return false if the strings are different lengths', function () {
  	compare('abc', 'ab').should.equal(false);
  });

  it('should return false if the strings have different contents', function () {
  	compare('abc', 'abd').should.equal(false);
  });
});
