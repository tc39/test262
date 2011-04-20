// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S9.5_A3.2_T2;
 * @section: 9.5;
 * @assertion: Operator uses floor, abs;
 * @description: Use operator ~;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S9.5_A3.2_T2",

path: "09_Type_Conversion\9.5_ToInt32\S9.5_A3.2_T2.js",

assertion: "Operator uses floor, abs",

description: "Use operator ~",

test: function testcase() {
   // CHECK#1
if (~1.2345 !== ~1) {
  $ERROR('#1: ~1.2345 === ~1)');
}

// CHECK#2
if (~-5.4321 !== ~-5) {
  $ERROR('#2: ~-5.4321 === ~-5)');
}

 }
});

