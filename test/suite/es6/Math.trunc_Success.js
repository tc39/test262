ES5Harness.registerTest( {
id: "unused",

path: "unused",

spec: "http://people.mozilla.org/~jorendorff/es6-draft.html#sec-math.trunc",

description: "Math.trunc should return 4578 if called with 4578.584949.",

//true if pass. 
test: function testcase() {
  if(Math.trunc(4578.584949) === 4578) {
  	return true;
  }
 }
});