// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S9.2_A3_T1;
 * @section: 9.2, 15.6.1;
 * @assertion: Result of boolean conversion from boolean value is no conversion;
 * @description: true and false convert to Boolean by explicit transformation;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S9.2_A3_T1",

path: "9.2, 15.6.1",

description: "true and false convert to Boolean by explicit transformation",

test: function testcase() {
   // CHECK#1 
if (Boolean(true) !== true) {
  $ERROR('#1: Boolean(true) === true. Actual: ' + (Boolean(true)));	
}

// CHECK#2
if (Boolean(false) !== false) {
  $ERROR('#2: Boolean(false) === false. Actual: ' + (Boolean(false)));
}

 }
});

