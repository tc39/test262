/**
 *
 * @author Ryan Lewis
 * @email ryanhlewis@hotmail.com
 * @spec http://people.mozilla.org/~jorendorff/es6-draft.html#sec-math.trunc
 * @description Math.trunc should return 0 when called with 0.
 *
 */

function testcase() {
  if(Math.trunc(0) === 0) {
  	return true;
  }
 }
runTestCase(testcase);