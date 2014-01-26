/**
 *
 * @author Ryan Lewis
 * @email ryanhlewis@hotmail.com
 * @spec http://people.mozilla.org/~jorendorff/es6-draft.html#sec-math.hypot
 * @description Math.hypot should return Infinity if called with any argument that is Infinity.
 *
 */

function testcase() {
  if(Math.hypot(NaN, Infinity) === Infinity) {
  	return true;
  }
 }
runTestCase(testcase);