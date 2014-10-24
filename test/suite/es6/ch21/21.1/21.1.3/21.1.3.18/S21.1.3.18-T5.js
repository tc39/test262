/**
 * @path es6/ch21/21.1/21.1.3/21.1.3.18/S21.1.3.18-T5.js
 * @description String.prototype.startsWith can be used on non string objects (which are not null and non undefined)
 */

var result = String.prototype.startsWith.call(true, 'true');
if (result !== true) {
  $ERROR('The result should be true');
}