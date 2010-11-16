// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S11.13.1_A2.1_T2;
 * @section: 11.13.1;
 * @assertion: Operator x = y uses GetValue and PutValue;
 * @description: If GetBase(AssigmentExpression) is null, throw ReferenceError;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.13.1_A2.1_T2",

path: "11.13.1",

description: "If GetBase(AssigmentExpression) is null, throw ReferenceError",

test: function testcase() {
   //CHECK#1
try {
    S11_13_1_A2_1_T2_x = S11_13_1_A2_1_T2_y;
    $ERROR('#1.1: S11_13_1_A2_1_T2_x = S11_13_1_A2_1_T2_y throw ReferenceError. Actual: ' + (S11_13_1_A2_1_T2_x = S11_13_1_A2_1_T2_y));  
}
catch (e) {
  if ((e instanceof ReferenceError) !== true) {
      $ERROR('#1.2: S11_13_1_A2_1_T2_x = S11_13_1_A2_1_T2_y throw ReferenceError. Actual: ' + (e));  
  }
}

 }
});

