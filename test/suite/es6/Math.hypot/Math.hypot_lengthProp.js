/**
 *
 * @author Ryan Lewis
 * @email ryanhlewis@hotmail.com
 * @spec http://people.mozilla.org/~jorendorff/es6-draft.html#sec-math.hypot
 * @description Math.hypot.length should return 2.
 *
 */

function testcase() {
  if(Math.hypot.length === 2) {
  	return true;
  }
 }
runTestCase(testcase);