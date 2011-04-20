// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S10.1.6_A1_T1;
 * @section: 10.1.6;
 * @assertion: The activation object is initialised with a property with name arguments and attributes {DontDelete};
 * @description: Checking ifdeleting function parameter is possible;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S10.1.6_A1_T1",

path: "10_Execution_Contexts\10.1_Definitions\S10.1.6_A1_T1.js",

assertion: "The activation object is initialised with a property with name arguments and attributes {DontDelete}",

description: "Checking ifdeleting function parameter is possible",

test: function testcase() {
   //CHECK#1
function f1(a){
  delete a;
  return a;
}
if (f1(1) !== 1)
  $ERROR('#1: Function parameter was deleted');
  

 }
});

