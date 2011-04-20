// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.8.1.1_A1;
 * @section: 15.8.1.1;
 * @assertion: Math.E is approximately 2.7182818284590452354;
 * @description: Comparing Math.E with 2.7182818284590452354;  
 */

// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.8.1.1_A1",

path: "15_Native\15.8_The_Math_Object\15.8.1_Value_Properties_of_the_Math_Object\15.8.1.1_E\S15.8.1.1_A1.js",

assertion: "Math.E is approximately 2.7182818284590452354",

description: "Comparing Math.E with 2.7182818284590452354",

test: function testcase() {
   $INCLUDE("math_precision.js");
$INCLUDE("math_isequal.js");

// CHECK#1
if (!isEqual(Math.E, 2.7182818284590452354)) {
  $ERROR('#1: \'Math.E is not approximately equal to 2.7182818284590452354\'');
}

 }
});

