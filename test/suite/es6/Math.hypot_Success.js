ES5Harness.registerTest( {
id: "unused",

path: "unused",

spec: "http://people.mozilla.org/~jorendorff/es6-draft.html#sec-math.hypot",

description: "Math.hypot should return 4 if called with 3 and 2.6457513110645907.",

//true if pass. 
test: function testcase() {
  if(Math.hypot(3,2.6457513110645907) === 4) {
  	return true;
  }
 }
});