/**
 * @path es6/ch21/20.1/20.1.3/20.1.3.1/S20.1.3.1-T1.js
 * @description Number.prototype.clz returns 32 for 0 number
 */

var result = Number.prototype.clz.call(0);
if (result !== 32) {
  $ERROR('Result of clz(0) should be 32');
}