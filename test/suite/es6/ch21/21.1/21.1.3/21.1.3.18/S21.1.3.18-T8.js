/**
 * @path es6/ch21/21.1/21.1.3/21.1.3.18/S21.1.3.18-T8.js
 * @description String.prototype.startsWith position can be used to change where search begins
 */

var result = String.prototype.startsWith.call('string test', 'test', 6);
if (result !== false) {
  $ERROR('The result should be false.');
}