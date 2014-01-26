ES5Harness.registerTest( {
id: "unused",

path: "unused",

spec: "http://people.mozilla.org/~jorendorff/es6-draft.html#sec-math.hypot",

description: "Math.hypot should return NaN if called with any argument that is NaN.",

//true if pass. 
test: function testcase() {
  if(Math.hypot(NaN, 3) === NaN) {
  	return true;
  }
 }
});