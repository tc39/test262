/**
 *
 * @author Ryan Lewis
 * @email ryanhlewis@hotmail.com
 * @spec http://people.mozilla.org/~jorendorff/es6-draft.html#sec-string.prototype.contains
 * @description String should return false if a location is passed that is greather than the length of the string.
 *
 */

function testcase() {
  if('word'.contains('w', 5) === false) {
  	return true;
  }
 }
runTestCase(testcase);