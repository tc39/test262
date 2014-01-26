ES5Harness.registerTest( {
id: "unused",

path: "unused",

spec: "http://people.mozilla.org/~jorendorff/es6-draft.html#sec-math.trunc",

description: "Math.trunc should return 0 if called with a value between 0 and 1.",

//true if pass. 
test: function testcase() {
  if(Math.trunc(.9) === 0) {
  	return true;
  }
 }
});