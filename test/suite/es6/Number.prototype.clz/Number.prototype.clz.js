/**
 *
 * @author Ryan Lewis
 * @email ryanhlewis@hotmail.com
 * @spec http://people.mozilla.org/~jorendorff/es6-draft.html#sec-number.prototype.clz
 * @description Number.prototype.clz should return 32 if passed 0.
 *
 */

function testcase() {
  if(Number.prototype.clz(0) === 32) {
  	return true;
  }
 }
runTestCase(testcase);