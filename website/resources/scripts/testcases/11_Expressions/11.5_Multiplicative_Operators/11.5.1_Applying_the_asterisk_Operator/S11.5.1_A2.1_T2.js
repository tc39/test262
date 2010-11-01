// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S11.5.1_A2.1_T2;
 * @section: 11.5.1;
 * @assertion: Operator x * y uses GetValue;
 * @description: If GetBase(x) is null, throw ReferenceError;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.5.1_A2.1_T2",

path: "11.5.1",

description: "If GetBase(x) is null, throw ReferenceError",

test: function testcase() {
   //CHECK#1
try {
  S11_5_1_A2_1_T2_x * 1;
  $ERROR('#1.1: S11_5_1_A2_1_T2_x * 1 throw ReferenceError. Actual: ' + (S11_5_1_A2_1_T2_x * 1));  
}
catch (e) {
  if ((e instanceof ReferenceError) !== true) {
      $ERROR('#1.2: S11_5_1_A2_1_T2_x * 1 throw ReferenceError. Actual: ' + (e));  
  }
}


 }
});

