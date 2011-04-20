// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S11.4.6_A2.1_T2;
* @section: 11.4.6;
* @assertion: Operator +x uses GetValue;
* @description: If GetBase(x) is null, throw ReferenceError;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.4.6_A2.1_T2",

path: "11_Expressions\11.4_Unary_Operators\11.4.6_Unary_plus_Operator\S11.4.6_A2.1_T2.js",

assertion: "Operator +x uses GetValue",

description: "If GetBase(x) is null, throw ReferenceError",

test: function testcase() {
   //CHECK#1
try {
  +x;
  $ERROR('#1.1: +x throw ReferenceError. Actual: ' + (+x));  
}
catch (e) {
  if ((e instanceof ReferenceError) !== true) {
    $ERROR('#1.2: +x throw ReferenceError. Actual: ' + (e));  
  }
}

 }
});

