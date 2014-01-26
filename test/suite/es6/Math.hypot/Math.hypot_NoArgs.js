/**
 *
 * @author Ryan Lewis
 * @email ryanhlewis@hotmail.com
 * @spec http://people.mozilla.org/~jorendorff/es6-draft.html#sec-math.hypot
 * @description Math.hypot should return 0 if called with no arguments.
 *
 */

function testcase() {
   if(Math.hypot() === 0) {
  	return true;
  }
 }
runTestCase(testcase);