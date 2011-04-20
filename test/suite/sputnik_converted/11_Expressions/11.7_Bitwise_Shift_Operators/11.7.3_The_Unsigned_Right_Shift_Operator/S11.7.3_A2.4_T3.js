// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S11.7.3_A2.4_T3;
 * @section: 11.7.3;
 * @assertion: First expression is evaluated first, and then second expression;
 * @description: Checking with undeclarated variables;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.7.3_A2.4_T3",

path: "11_Expressions\11.7_Bitwise_Shift_Operators\11.7.3_The_Unsigned_Right_Shift_Operator\S11.7.3_A2.4_T3.js",

assertion: "First expression is evaluated first, and then second expression",

description: "Checking with undeclarated variables",

test: function testcase() {
   //CHECK#1
try {
  x >>> (x = 1);
  $ERROR('#1.1: x >>> (x = 1) throw ReferenceError. Actual: ' + (x >>> (x = 1)));  
}
catch (e) {
  if ((e instanceof ReferenceError) !== true) {
    $ERROR('#1.2: x >>> (x = 1) throw ReferenceError. Actual: ' + (e));  
  }
}

//CHECK#2
if ((y = 1) >>> y !== 0) {
  $ERROR('#2: (y = 1) >>> y === 0. Actual: ' + ((y = 1) >>> y));
}


 }
});

