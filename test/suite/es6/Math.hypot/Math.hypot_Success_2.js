/**
 *
 * @author Ryan Lewis
 * @email ryanhlewis@hotmail.com
 * @spec http://people.mozilla.org/~jorendorff/es6-draft.html#sec-math.hypot
 * @description Math.hypot should return 5 if called with 3 and 4.
 *
 */

function testcase() {
  if(Math.hypot(3,4) === 5) {
  	return true;
  }
 }
runTestCase(testcase);