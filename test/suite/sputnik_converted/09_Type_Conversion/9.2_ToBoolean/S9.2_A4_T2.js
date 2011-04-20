// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S9.2_A4_T2;
 * @section: 9.2, 11.4.9;
 * @assertion: Result of boolean conversion from number value is false if the argument is +0, -0, or NaN; otherwise, is true;
 * @description: +0, -0 and NaN convert to Boolean by implicit transformation;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S9.2_A4_T2",

path: "09_Type_Conversion\9.2_ToBoolean\S9.2_A4_T2.js",

assertion: "Result of boolean conversion from number value is false if the argument is +0, -0, or NaN; otherwise, is true",

description: "+0, -0 and NaN convert to Boolean by implicit transformation",

test: function testcase() {
   // CHECK#1
if (!(+0) !== true) {
  $ERROR('#1: !(+0) === true. Actual: ' + (!(+0))); 	 
}

// CHECK#2
if (!(-0) !== true) {
  $ERROR('#2: !(-0) === true. Actual: ' + (!(-0)));
}

// CHECK#3
if (!(Number.NaN) !== true) {
  $ERROR('#3: !(Number.NaN) === true. Actual: ' + (!(Number.NaN)));
}

 }
});

