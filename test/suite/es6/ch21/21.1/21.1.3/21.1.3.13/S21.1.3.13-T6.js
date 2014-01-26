/**
 * @path es6/ch21/21.1/21.1.3/21.1.3.13/S21.1.3.13-T6.js
 * @description String.prototype.repeat can be used on non-string objects (non undefined and non null)
 */

runTestCase(function() {
  var result = String.prototype.repeat.call(true, 2);
  return result === 'truetrue';
});
