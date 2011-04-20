// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.7.3.6_A4;
 * @section: 15.7.3.6;
 * @assertion: Number.POSITIVE_INFINITY has the attribute DontEnum;
 * @description: Checking if enumerating Number.POSITIVE_INFINITY fails;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.7.3.6_A4",

path: "15_Native\15.7_Number_Objects\15.7.3_Properties_of_Number_Constructor\15.7.3.6_Number.POSITIVE_INFINITY\S15.7.3.6_A4.js",

assertion: "Number.POSITIVE_INFINITY has the attribute DontEnum",

description: "Checking if enumerating Number.POSITIVE_INFINITY fails",

test: function testcase() {
   //CHECK#1
for(var x in Number) {
  if(x === "POSITIVE_INFINITY") {
    $ERROR('#1: Number.POSITIVE_INFINITY has the attribute DontEnum');
  }
}

if (Number.propertyIsEnumerable('POSITIVE_INFINITY')) {
  $ERROR('#2: Number.POSITIVE_INFINITY has the attribute DontEnum');
}

 }
});

