/**
 *
 * @author Ryan Lewis
 * @email ryanhlewis@hotmail.com
 * @spec http://people.mozilla.org/~jorendorff/es6-draft.html#sec-string.prototype.endswith
 * @description endsWith should return false when called on 'word' and passed 'r'.
 *
 */

function testcase() {
  if('word'.endsWith('r')) {
  	return true;
  }
 }
runTestCase(testcase);