// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S8.1_A4;
 * @section: 8.1;
 * @assertion: If property of object not exist, return undefined;
 * @description: Check value of not existed property;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S8.1_A4",

path: "8.1",

description: "Check value of not existed property",

test: function testcase() {
   // CHECK#1 
if ((new Object()).newProperty !== undefined) {
  $ERROR('#1: (new Object()).newProperty === undefined. Actual: ' + ((new Object()).newProperty));
} 


 }
});

