ES5Harness.registerTest( {
id: "unused",

path: "unused",

spec: "http://people.mozilla.org/~jorendorff/es6-draft.html#sec-math.trunc",

description: "Math.trunc should return NaN when called with NaN.",

//true if pass. 
test: function testcase() {
  if(Math.trunc(NaN) === NaN) {
  	return true;
  }
 }
});