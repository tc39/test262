/**
 *
 * @author Ryan Lewis
 * @email ryanhlewis@hotmail.com
 * @spec http://people.mozilla.org/~jorendorff/es6-draft.html#sec-math.fround
 * @description Math.fround should return NaN if called with NaN.
 *
 */

function testcase() {
  if(Math.fround(NaN) === NaN) {
  	return true;
  }
 }
runTestCase(testcase);