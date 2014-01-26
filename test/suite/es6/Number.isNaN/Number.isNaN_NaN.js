/**
 *
 * @author Ryan Lewis
 * @email ryanhlewis@hotmail.com
 * @spec http://people.mozilla.org/~jorendorff/es6-draft.html#sec-number.isnan
 * @description Number.IsNaN should return true if called with NaN.
 *
 */

function testcase() {
  return Number.isNaN(NaN);
 }
runTestCase(testcase);