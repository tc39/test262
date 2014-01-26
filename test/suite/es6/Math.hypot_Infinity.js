ES5Harness.registerTest( {
id: "unused",

path: "unused",

spec: "http://people.mozilla.org/~jorendorff/es6-draft.html#sec-math.hypot",

description: "Math.hypot should return Infinity if called with any argument that is Infinity.",

//true if pass. 
test: function testcase() {
  if(Math.hypot(3, Infinity) === Infinity) {
  	return true;
  }
 }
});