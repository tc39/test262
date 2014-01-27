/**
 * @path es6/ch21/21.1/21.1.2/21.1.2.2/S21.1.2.2-T2.js
 * @description String.fromCodePoint returns empty string when no parameters are set
 */

runTestCase(function() {
  var result = String.fromCodePoint();
  return result === '';
});
