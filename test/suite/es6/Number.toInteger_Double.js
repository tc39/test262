ES5Harness.registerTest( {
id: "unused",

path: "unused",

spec: "http://wiki.ecmascript.org/doku.php?id=harmony:number.tointeger",

description: "Number.toInteger should return the integer representation of a double.",

//true if pass. 
test: function testcase() {
  if(Number.toInteger !== undefined) {
  	return Number.toInteger(3.65) === 3;
  }
 }
});