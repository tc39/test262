/**
 *
 * @author Ryan Lewis
 * @email ryanhlewis@hotmail.com
 * @spec http://people.mozilla.org/~jorendorff/es6-draft.html#sec-string.prototype.contains
 * @description String should return false if a letter is not found in the word.
 *
 */

function testcase() {
  if('word'.contains('a', 0) === false) {
  	return true;
  }
 }
runTestCase(testcase);