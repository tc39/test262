/**
 * @path es6/ch21/21.1/21.1.3/21.1.3.18/S21.1.3.18-T1.js
 * @description The length property of the startsWith method is 1.
 */

if (String.prototype.startsWith.length !== 1) {
  $ERROR('The length property of the startsWith method is 1.');
}