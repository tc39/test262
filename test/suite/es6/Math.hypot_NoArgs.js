ES5Harness.registerTest( {
id: "unused",

path: "unused",

spec: "http://people.mozilla.org/~jorendorff/es6-draft.html#sec-math.hypot",

description: "Math.hypot should return 0 if called with no arguments.",

//true if pass. 
test: function testcase() {
  if(Math.hypot() === 0) {
  	return true;
  }
 }
});