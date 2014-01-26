ES5Harness.registerTest( {
id: "unused",

path: "unused",

spec: "http://people.mozilla.org/~jorendorff/es6-draft.html#sec-number.prototype.clz",

description: "Number.prototype.clz should return 31 if passed 1",

//true if pass. 
test: function testcase() {
  if(Number.prototype.clz(1) === 31) {
  	return true;
  }
 }
});