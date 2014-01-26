/**
 *
 * @author Ryan Lewis
 * @email ryanhlewis@hotmail.com
 * @spec http://people.mozilla.org/~jorendorff/es6-draft.html#sec-string.prototype.contains
 * @description String should return false if a letter is not found in the word starting from the passed location.
 *
 */

function testcase() {
  if('word'.contains('o', 3) === false) {
  	return true;
  }
 }
runTestCase(testcase);