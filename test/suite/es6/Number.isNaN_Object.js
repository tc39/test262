ES5Harness.registerTest( {
id: "unused",

path: "unused",

description: "Number.IsNaN should return false if called with a non-number Object",

//true if pass. 
test: function testcase() {
  return !Number.isNaN(new Object());
 }
});