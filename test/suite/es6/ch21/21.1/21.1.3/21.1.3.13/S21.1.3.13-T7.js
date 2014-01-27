/**
 * @path es6/ch21/21.1/21.1.3/21.1.3.13/S21.1.3.13-T7.js
 * @description String.prototype.repeat can accept NaN (because it converts to 0 with ToInteger(NaN))
 */

var result = String.prototype.repeat.call(true, Number.NaN);
if (result !== '') {
  $ERROR('Result should be empty string');
}
