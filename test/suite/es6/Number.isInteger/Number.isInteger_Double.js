/**
 *
 * @author Ryan Lewis
 * @email ryanhlewis@hotmail.com
 * @spec http://people.mozilla.org/~jorendorff/es6-draft.html#sec-number.isinteger
 * @description Number.isInteger should return false if called with a double.
 *
 */

function testcase() {
  if(Number.isInteger(6.75) === false) {
  	return true;
  }
 }
runTestCase(testcase);