// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S11.13.2_A2.1_T3.1;
 * @section: 11.13.2;
 * @assertion: Operator uses GetValue; 
 * @description: If GetBase(LeftHandSideExpression) is null, throw ReferenceError. Check operator is "x *= y";
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.13.2_A2.1_T3.1",

path: "11.13.2",

description: "If GetBase(LeftHandSideExpression) is null, throw ReferenceError. Check operator is \"x *= y\"",

test: function testcase() {
   //CHECK#1
try {
  var z = (S11_13_2_A2_1_T3_1_x *= 1);
  $ERROR('#1.1: S11_13_2_A2_1_T3_1_x *= 1 throw ReferenceError. Actual: ' + (z));  
}
catch (e) {
  if ((e instanceof ReferenceError) !== true) {
      $ERROR('#1.2: S11_13_2_A2_1_T3_1_x *= 1 throw ReferenceError. Actual: ' + (e));  
  }
}

 }
});

