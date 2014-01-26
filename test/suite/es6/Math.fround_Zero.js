ES5Harness.registerTest( {
id: "unused",

path: "unused",

spec: "http://people.mozilla.org/~jorendorff/es6-draft.html#sec-math.fround",

description: "Math.fround should return 0 if called with 0.",

//true if pass. 
test: function testcase() {
  if(Math.fround(0) === 0) {
  	return true;
  }
 }
});