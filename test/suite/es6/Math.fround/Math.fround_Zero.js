/**
 *
 * @author Ryan Lewis
 * @email ryanhlewis@hotmail.com
 * @spec http://people.mozilla.org/~jorendorff/es6-draft.html#sec-math.froun
 * @description Math.fround should return 0 if called with 0.
 *
 */

function testcase() {
  if(Math.fround(0) === 0) {
  	return true;
  }
 }
runTestCase(testcase);