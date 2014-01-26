/**
 *
 * @author Ryan Lewis
 * @email ryanhlewis@hotmail.com
 * @spec http://wiki.ecmascript.org/doku.php?id=harmony:number.tointeger
 * @description Number.toInteger should return the integer representation of a double.
 *
 */

function testcase() {
  if(Number.toInteger !== undefined) {
  	return Number.toInteger(3.65) === 3;
  }
 }
runTestCase(testcase);