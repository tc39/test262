/**
 * @path es6/ch21/20.1/20.1.3/20.1.3.1/S20.1.3.1-T3.js
 * @description Number.prototype.clz floors number
 */

var result = Number.prototype.clz.call(0.1);
if (result !== 32) {
  $ERROR('Result of clz(0.1) should be 32');
}