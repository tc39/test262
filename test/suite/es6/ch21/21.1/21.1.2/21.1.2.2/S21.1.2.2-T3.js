/**
 * @path es6/ch21/21.1/21.1.2/21.1.2.2/S21.1.2.2-T3.js
 * @description String.fromCodePoint should call ToNumber over elements in rest parameter object
 */

var result = String.fromCodePoint(null, true, false, '2');

if (result.charCodeAt(0) !== 0) {
  $ERROR('ToNumber(Null) === 0');
}

if (result.charCodeAt(1) !== 1) {
  $ERROR('ToNumber(true) === 1');
}

if (result.charCodeAt(2) !== 0) {
  $ERROR('ToNumber(false) === 0');
}

if (result.charCodeAt(3) !== 2) {
  $ERROR('ToNumber(\'2\') === 2');
}