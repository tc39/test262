// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S9.7_A3.2_T1;
 * @section: 9.7;
 * @assertion: Operator uses floor, abs;
 * @description: For testing use String.fromCharCode(Number).charCodeAt(0) construction;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S9.7_A3.2_T1",

path: "09_Type_Conversion\9.7_ToUint16\S9.7_A3.2_T1.js",

assertion: "Operator uses floor, abs",

description: "For testing use String.fromCharCode(Number).charCodeAt(0) construction",

test: function testcase() {
   // CHECK#1
if (String.fromCharCode(1.2345).charCodeAt(0) !== 1) {
  $ERROR('#1: String.fromCharCode(1.2345).charCodeAt(0) === 1. Actual: ' + (String.fromCharCode(1.2345).charCodeAt(0)));
}

// CHECK#2
if (String.fromCharCode(-5.4321).charCodeAt(0) !== 65531) {
  $ERROR('#2: String.fromCharCode(-5.4321).charCodeAt(0) === 65531. Actual: ' + (String.fromCharCode(-5.4321).charCodeAt(0)));
}

 }
});

