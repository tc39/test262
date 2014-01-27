/**
 * @path es6/ch21/20.1/20.1.3/20.1.3.1/S20.1.3.1-T1.js
 * @description Number.prototype.clz returns 32 for 0 number
 */

runTestCase(function() {
  var result = Number.prototype.clz.call(0);
  return result === 32;
});