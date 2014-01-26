/**
 *
 * @author Ryan Lewis
 * @email ryanhlewis@hotmail.com
 * @spec http://people.mozilla.org/~jorendorff/es6-draft.html#sec-string.prototype.contains
 * @description String should have the property length with size of 1.
 *
 */

function testcase() {
  if('word'.contains.length === 1) {
  	return true;
  }
 }
runTestCase(testcase);