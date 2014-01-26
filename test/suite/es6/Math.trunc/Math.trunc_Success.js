/**
 *
 * @author Ryan Lewis
 * @email ryanhlewis@hotmail.com
 * @spec http://people.mozilla.org/~jorendorff/es6-draft.html#sec-math.trunc
 * @description Math.trunc should return 4578 if called with 4578.584949
 *
 */

function testcase() {
  if(Math.trunc(4578.584949) === 4578) {
  	return true;
  }
 }
runTestCase(testcase);