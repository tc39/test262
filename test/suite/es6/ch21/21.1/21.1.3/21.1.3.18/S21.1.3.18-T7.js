/**
 * @path es6/ch21/21.1/21.1.3/21.1.3.18/S21.1.3.18-T7.js
 * @description String.prototype.startsWith if position < 0 is specified - this is equal to 0
 */

runTestCase(function() {
  var result = String.prototype.startsWith.call('test string', 'test', -1);
  return result === true;
});