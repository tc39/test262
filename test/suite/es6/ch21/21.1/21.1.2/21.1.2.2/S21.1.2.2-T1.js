/**
 * @path es6/ch21/21.1/21.1.2/21.1.2.2/S21.1.2.2-T1.js
 * @description String.fromCodePoint returns a string created by using the specified sequence of code points.
 */

var result = String.fromCodePoint(65, 90);
if (result !== 'AZ') {
  $ERROR('Result should be \'AZ\' for values 65, 90.');
}
