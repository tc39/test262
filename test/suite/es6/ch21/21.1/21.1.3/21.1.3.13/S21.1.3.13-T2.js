/**
 * @path es6/ch21/21.1/21.1.3/21.1.3.13/S21.1.3.13-T2.js
 * @description String.prototype.repeat throws RangeError if n === Number.POSITIVE_INFINITY (6.)
 */

runTestCase(function() {
  try {
    var result = String.prototype.repeat.call('', Number.POSITIVE_INFINITY);
  } catch(e) {
    return e instanceof RangeError;
  }
  
  return false;
});
