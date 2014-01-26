/**
 *
 * @author Ryan Lewis
 * @email ryanhlewis@hotmail.com
 * @spec http://people.mozilla.org/~jorendorff/es6-draft.html#sec-number.isnan
 * @description Number.IsNaN should return false if called with a String.
 *
 */

function testcase() {
  return !Number.isNaN('string');
 }
runTestCase(testcase);