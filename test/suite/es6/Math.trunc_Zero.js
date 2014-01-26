ES5Harness.registerTest( {
id: "unused",

path: "unused",

spec: "http://people.mozilla.org/~jorendorff/es6-draft.html#sec-math.trunc",

description: "Math.trunc should return 0 when called with 0.",

//true if pass. 
test: function testcase() {
  if(Math.trunc(0) === 0) {
  	return true;
  }
 }
});