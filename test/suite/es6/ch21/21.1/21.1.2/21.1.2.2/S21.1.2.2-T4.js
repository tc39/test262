/**
 * @path es6/ch21/21.1/21.1.2/21.1.2.2/S21.1.2.2-T4.js
 * @description String.fromCodePoint should call ToNumber over elements in rest parameter object.
 *              and if there are undefined object - RangeError should be threw (because of SameValue(nextCP, ToInteger(nextCP)))
 */

runTestCase(function() {
  try {
    var result = String.fromCodePoint(undefined);
  } catch(e) {
    return e instanceof RangeError;
  }
  
  return false;
});
