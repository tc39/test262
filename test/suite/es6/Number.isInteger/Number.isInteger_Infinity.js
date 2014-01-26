/**
 *
 * @author Ryan Lewis
 * @email ryanhlewis@hotmail.com
 * @spec http://people.mozilla.org/~jorendorff/es6-draft.html#sec-number.isinteger
 * @description Number.isInteger should return false if called with Infinity.
 *
 */

function testcase() {
  if(Number.isInteger(Infinity) === false) {
  	return true;
  }
 }
runTestCase(testcase);