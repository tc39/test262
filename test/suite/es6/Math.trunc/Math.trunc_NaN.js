/**
 *
 * @author Ryan Lewis
 * @email ryanhlewis@hotmail.com
 * @spec http://people.mozilla.org/~jorendorff/es6-draft.html#sec-math.trunc
 * @description Math.trunc should return NaN when called with NaN.
 *
 */

function testcase() {
  if(Math.trunc(NaN) === NaN) {
  	return true;
  }
 }
runTestCase(testcase);