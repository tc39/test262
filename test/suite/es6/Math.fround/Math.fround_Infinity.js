/**
 *
 * @author Ryan Lewis
 * @email ryanhlewis@hotmail.com
 * @spec http://people.mozilla.org/~jorendorff/es6-draft.html#sec-math.fround
 * @description Math.fround should return Infinity if called with Infinity.
 *
 */

function testcase() {
  if(Math.fround(Infinity) === Infinity) {
  	return true;
  }
 }
runTestCase(testcase);