// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.7.3.2_A3;
 * @section: 15.7.3.2;
 * @assertion: Number.MAX_VALUE is DontDelete;
 * @description: Checking if deleting Number.MAX_VALUE fails;
 * @strict_mode_negative
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.7.3.2_A3",

path: "15_Native\15.7_Number_Objects\15.7.3_Properties_of_Number_Constructor\15.7.3.2_Number.MAX_VALUE\S15.7.3.2_A3.js",

assertion: "Number.MAX_VALUE is DontDelete",

description: "Checking if deleting Number.MAX_VALUE fails",

test: function testcase() {
   // CHECK#1
if (delete Number.MAX_VALUE !== false) {
  $ERROR('#1: delete Number.MAX_VALUE === false');
}

 }
});

