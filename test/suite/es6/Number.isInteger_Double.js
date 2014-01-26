ES5Harness.registerTest( {
id: "unused",

path: "unused",

spec: "http://people.mozilla.org/~jorendorff/es6-draft.html#sec-number.isinteger",

description: "Number.isInteger should return false if called with a double",

//true if pass. 
test: function testcase() {
  if(Number.isInteger(6.75) === false) {
  	return true;
  }
 }
});