/**
 * @path es6/ch21/21.1/21.1.3/21.1.3.13/S21.1.3.13-T3.js
 * @description String.prototype.repeat returns empty string if n = 0
 */

var result = String.prototype.repeat.call('test string', 0);
if (result !== '') {
  $ERROR('Result should be empty string');
}
