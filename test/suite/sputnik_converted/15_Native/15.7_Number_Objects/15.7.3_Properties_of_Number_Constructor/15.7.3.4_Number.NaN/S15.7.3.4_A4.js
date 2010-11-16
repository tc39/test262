// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.7.3.4_A4;
 * @section: 15.7.3.4;
 * @assertion: Number.NaN has the attribute DontEnum;
 * @description: Checking if enumerating Number.NaN fails;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.7.3.4_A4",

path: "15.7.3.4",

description: "Checking if enumerating Number.NaN fails",

test: function testcase() {
   //CHECK#1
for(var x in Number) {
  if(x === "NaN") {
    $ERROR('#1: Number.NaN has the attribute DontEnum');
  }
}

if (Number.propertyIsEnumerable('NaN')) {
  $ERROR('#2: Number.NaN has the attribute DontEnum');
}

 }
});

