ES5Harness.registerTest( {
id: "unused",

path: "unused",

description: "Number.IsNaN should return true if called with NaN",

//true if pass. 
test: function testcase() {
  return Number.isNaN(NaN);
 }
});