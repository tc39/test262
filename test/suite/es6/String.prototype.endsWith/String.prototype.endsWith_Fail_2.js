/**
 *
 * @author Ryan Lewis
 * @email ryanhlewis@hotmail.com
 * @spec http://people.mozilla.org/~jorendorff/es6-draft.html#sec-string.prototype.endswith
 * @description endsWith should return false when called on 'word' and passed 'd', with an endPosition of 3.
 *
 */

function testcase() {
  if('word'.endsWith('d',3)) {
  	return true;
  }
 }
runTestCase(testcase);