ES5Harness.registerTest( {
id: "unused",

path: "unused",

spec: "http://people.mozilla.org/~jorendorff/es6-draft.html#sec-math.hypot",

description: "Math.hypot.length should return 2.",

//true if pass. 
test: function testcase() {
  if(Math.hypot.length === 2) {
  	return true;
  }
 }
});