/**
 *
 * @author Ryan Lewis
 * @email ryanhlewis@hotmail.com
 * @spec http://people.mozilla.org/~jorendorff/es6-draft.html#sec-string.prototype.contains
 * @description String should return true when called on 'word' and passed 'w' and the location 0.
 *
 */

function testcase() {
  if('word'.contains('w', 0)) {
  	return true;
  }
 }
runTestCase(testcase);