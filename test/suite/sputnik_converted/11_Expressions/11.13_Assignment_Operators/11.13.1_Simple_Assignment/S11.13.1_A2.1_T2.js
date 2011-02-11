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
  x = y;
  $ERROR('#1.1: x = y throw ReferenceError. Actual: ' + (x = y));  
}
catch (e) {
  if ((e instanceof ReferenceError) !== true) {
    $ERROR('#1.2: x = y throw ReferenceError. Actual: ' + (e));  
  }
}

 }
});

