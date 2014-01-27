/**
 * @path es6/ch21/21.1/21.1.2/21.1.2.2/S21.1.2.2-T3.js
 * @description String.fromCodePoint should call ToNumber over elements in rest parameter object
 */

runTestCase(function() {
  var result = String.fromCodePoint(null, true, false, '2');

  return result.charCodeAt(0) === 0 && // ToNumber(Null) === 0 
    result.charCodeAt(1) === 1 && // ToNumber(true) === 1
    result.charCodeAt(2) === 0 && // ToNumber(false) === 1
    result.charCodeAt(3) === 2; // ToNumber('2') === 2
});
