ES5Harness.registerTest( {
id: "unused",

path: "unused",

spec: "http://people.mozilla.org/~jorendorff/es6-draft.html#sec-math.fround",

description: "Math.fround should return NaN if called with NaN.",

//true if pass. 
test: function testcase() {
  if(Math.fround(NaN) === NaN) {
  	return true;
  }
 }
});