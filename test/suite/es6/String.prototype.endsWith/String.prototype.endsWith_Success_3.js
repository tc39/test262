/**
 *
 * @author Ryan Lewis
 * @email ryanhlewis@hotmail.com
 * @spec http://people.mozilla.org/~jorendorff/es6-draft.html#sec-string.prototype.endswith
 * @description endsWith should return true when called on 'word' and passed 'd' and with an endPosition of 25.
 *
 */

function testcase() {
  if('word'.endsWith('d', 25)) {
  	return true;
  }
 }
runTestCase(testcase);