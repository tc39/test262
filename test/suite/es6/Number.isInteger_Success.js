ES5Harness.registerTest( {
id: "unused",

path: "unused",

spec: "http://people.mozilla.org/~jorendorff/es6-draft.html#sec-number.isinteger",

description: "Number.isInteger should return true if called with an integer",

//true if pass. 
test: function testcase() {
  if(Number.isInteger(478) === true) {
  	return true;
  }
 }
});