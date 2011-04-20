// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.10.7_A1_T2;
* @section: 15.10.7;
* @assertion: RegExp instance has not [[call]] property;
* @description: Checking if call of RegExp("a|b","g")() fails;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.10.7_A1_T2",

path: "15_Native\15.10_RegExp_Objects\15.10.7_Properties_of_RegExp_Instances\S15.10.7_A1_T2.js",

assertion: "RegExp instance has not [[call]] property",

description: "Checking if call of RegExp(\"a|b\",\"g\")() fails",

test: function testcase() {
   //CHECK#1
try {
  $ERROR('#1.1: RegExp("a|b","g")() throw TypeError. Actual: ' + (RegExp("a|b","g")()));
} catch (e) {
  if ((e instanceof TypeError) !== true) {
    $ERROR('#1.2: RegExp("a|b","g")() throw TypeError. Actual: ' + (e));
  }
}



 }
});

