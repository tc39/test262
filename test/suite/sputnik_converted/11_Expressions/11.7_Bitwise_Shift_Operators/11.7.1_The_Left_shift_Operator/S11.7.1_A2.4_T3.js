// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S11.7.1_A2.4_T3;
 * @section: 11.7.1;
 * @assertion: First expression is evaluated first, and then second expression;
 * @description: Checking with undeclarated variables;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.7.1_A2.4_T3",

path: "11.7.1",

description: "Checking with undeclarated variables",

test: function testcase() {
   //CHECK#1
try {
    S11_7_1_A2_4_T3_x << (S11_7_1_A2_4_T3_x = 1);
    $ERROR('#1.1: S11_7_1_A2_4_T3_x << (S11_7_1_A2_4_T3_x = 1) throw ReferenceError. Actual: ' + (S11_7_1_A2_4_T3_x << (S11_7_1_A2_4_T3_x = 1)));  
}
catch (e) {
  if ((e instanceof ReferenceError) !== true) {
      $ERROR('#1.2: S11_7_1_A2_4_T3_x << (S11_7_1_A2_4_T3_x = 1) throw ReferenceError. Actual: ' + (e));  
  }
}

//CHECK#2
if ((S11_7_1_A2_4_T3_y = 1) << S11_7_1_A2_4_T3_y !== 2) {
    $ERROR('#2: (S11_7_1_A2_4_T3_y = 1) << S11_7_1_A2_4_T3_y === 2. Actual: ' + ((S11_7_1_A2_4_T3_y = 1) << S11_7_1_A2_4_T3_y));
}


 }
});

