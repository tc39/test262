// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S9.2_A2_T1; 
 * @section: 9.2, 15.6.1;
 * @assertion: Result of boolean conversion from null value is false;
 * @description: null convert to Boolean by explicit transformation;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S9.2_A2_T1",

path: "09_Type_Conversion\9.2_ToBoolean\S9.2_A2_T1.js",

assertion: "Result of boolean conversion from null value is false",

description: "null convert to Boolean by explicit transformation",

test: function testcase() {
   // CHECK#1
if (Boolean(null) !== false) {
  $ERROR('#1: Boolean(null) === false. Actual: ' + (Boolean(null))); 
}

 }
});

