/**
 * @path es6/ch21/21.1/21.1.2/21.1.2.2/S21.1.2.2.js
 * @description The length property of the fromCodePoint function is 0.
 */

if (String.fromCodePoint.length !== 0) {
  $ERROR('The length property of the fromCodePoint function should be 0');
}