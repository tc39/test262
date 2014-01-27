/**
 * @path es6/ch21/20.1/20.1.3/20.1.3.1/S20.1.3.1-T2.js
 * @description Number.prototype.clz returns 0 for 0x100000000 (max bit of 32 bit integer) number
 */

var result = Number.prototype.clz.call(0x100000000);
if (result !== 0) {
  $ERROR('Result of clz(0x100000000) should be 0');
}