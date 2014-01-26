/**
 *
 * @author Ryan Lewis
 * @email ryanhlewis@hotmail.com
 * @spec http://people.mozilla.org/~jorendorff/es6-draft.html#sec-string.prototype.endswith
 * @description endsWith should return true when called on 'word' and passed 'd' and with no location (defaults to 4).
 *
 */

function testcase() {
  if('word'.endsWith('d')) {
  	return true;
  }
 }
runTestCase(testcase);