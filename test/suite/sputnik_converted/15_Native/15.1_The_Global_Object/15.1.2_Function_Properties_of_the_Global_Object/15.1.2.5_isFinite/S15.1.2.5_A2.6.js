// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.1.2.5_A2.6;
* @section: 15.1.2.5;
* @assertion: The isFinite property has not prototype property;
* @description: Checking isFinit.prototype;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.1.2.5_A2.6",

path: "15_Native\15.1_The_Global_Object\15.1.2_Function_Properties_of_the_Global_Object\15.1.2.5_isFinite\S15.1.2.5_A2.6.js",

assertion: "The isFinite property has not prototype property",

description: "Checking isFinit.prototype",

test: function testcase() {
   //CHECK#1
if (isFinite.prototype !== undefined) {
  $ERROR('#1: isFinite.prototype === undefined. Actual: ' + (isFinite.prototype));
}

 }
});

