/**
 *
 * @author Ryan Lewis
 * @email ryanhlewis@hotmail.com
 * @spec http://people.mozilla.org/~jorendorff/es6-draft.html#sec-string.prototype.endswith
 * @description endsWith should return true when called on 'word' and passed 'r', with an endPosition of 3.
 *
 */

function testcase() {
  if('word'.endsWith('r',3)) {
  	return true;
  }
 }
runTestCase(testcase);