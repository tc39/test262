/**
 * @path es6/ch21/21.1/21.1.3/21.1.3.13/S21.1.3.13-T7.js
 * @description String.prototype.repeat floats non-integer n
 */

var result = String.prototype.repeat.call('test-string', 1.9);
if (result !== 'test-string') {
  $ERROR('Result should be \'test-string\'');
}
