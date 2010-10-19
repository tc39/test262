// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.7.3.2_A1;
 * @section: 15.7.3.2;
 * @assertion: Number.MAX_VALUE is approximately 1.7976931348623157e308;
 * @description: Checking Number.MAX_VALUE value;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.7.3.2_A1",

path: "15.7.3.2",

description: "Checking Number.MAX_VALUE value",

test: function testcase() {
   $INCLUDE("math_precision.js");
$INCLUDE("math_isequal.js");

// CHECK#1
if (!isEqual(Number.MAX_VALUE, 1.7976931348623157e308)) {
  $ERROR('#1: Number.MAX_VALUE approximately equal to 1.7976931348623157e308');
}

 }
});

