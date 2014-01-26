/**
 *
 * @author Ryan Lewis
 * @email ryanhlewis@hotmail.com
 * @spec http://people.mozilla.org/~jorendorff/es6-draft.html#sec-math.trunc
 * @description Math.trunc should return Infinity when called with Infinity.
 *
 */

function testcase() {
  if(Math.trunc(.9) === 0) {
  	return true;
  }
 }
runTestCase(testcase);