/**
 *
 * @author Ryan Lewis
 * @email ryanhlewis@hotmail.com
 * @spec http://people.mozilla.org/~jorendorff/es6-draft.html#sec-number.isinteger
 * @description Number.isInteger should return true if called with an integer.
 *
 */

function testcase() {
  if(Number.isInteger(478) === true) {
  	return true;
  }
 }
runTestCase(testcase);