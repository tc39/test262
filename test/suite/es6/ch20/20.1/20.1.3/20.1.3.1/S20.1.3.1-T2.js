/**
 * @path es6/ch21/20.1/20.1.3/20.1.3.1/S20.1.3.1-T2.js
 * @description Number.prototype.clz returns 0 for 0x100000000 (max bit of 32 bit integer) number
 */

runTestCase(function() {
  var result = Number.prototype.clz.call(0x100000000);
  return result === 0;
});