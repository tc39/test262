/**
 * @path es6/ch21/21.1/21.1.3/21.1.3.18/S21.1.3.18-T9.js
 * @description String.prototype.startsWith if position greater than string length - then string.length is used as position. 
 */

runTestCase(function() {
  var result = String.prototype.startsWith.call('test string', 'test', 20);
  return result === false;
});