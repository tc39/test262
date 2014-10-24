/**
 * @path es6/ch21/21.1/21.1.3/21.1.3.18/S21.1.3.18-T6.js
 * @description String.prototype.startsWith returns false if searchString is greater than length of string
 */

var result = String.prototype.startsWith.call('test', 'test string');
if (result !== false) {
  $ERROR('The result should be false.');
}
