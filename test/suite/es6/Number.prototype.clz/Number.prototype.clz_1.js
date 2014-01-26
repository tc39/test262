/**
 *
 * @author Ryan Lewis
 * @email ryanhlewis@hotmail.com
 * @spec http://people.mozilla.org/~jorendorff/es6-draft.html#sec-number.prototype.clz
 * @description Number.prototype.clz should return 31 if passed 1.
 *
 */

function testcase() {
  if(Number.prototype.clz(1) === 31) {
  	return true;
  }
 }
runTestCase(testcase);