ES5Harness.registerTest( {
id: "unused",

path: "unused",

spec: "http://people.mozilla.org/~jorendorff/es6-draft.html#sec-number.prototype.clz",

description: "Number.prototype.clz should return 0 if passed 2147483648",

//true if pass. 
test: function testcase() {
  if(Number.prototype.clz(2147483648) === 0) {
  	return true;
  }
 }
});

