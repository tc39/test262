// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.1.2.2_A9.6;
* @section: 15.1.2.2;
* @assertion: The parseInt property has not prototype property;
* @description: Checking parseInt.prototype;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.1.2.2_A9.6",

path: "15_Native\15.1_The_Global_Object\15.1.2_Function_Properties_of_the_Global_Object\15.1.2.2_parseInt\S15.1.2.2_A9.6.js",

assertion: "The parseInt property has not prototype property",

description: "Checking parseInt.prototype",

test: function testcase() {
   //CHECK#1
if (parseInt.prototype !== undefined) {
  $ERROR('#1: parseInt.prototype === undefined. Actual: ' + (parseInt.prototype));
}

 }
});

