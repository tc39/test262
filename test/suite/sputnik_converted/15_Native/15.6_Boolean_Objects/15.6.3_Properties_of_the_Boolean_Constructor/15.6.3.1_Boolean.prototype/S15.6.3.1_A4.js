// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.6.3.1_A4;
 * @section: 15.6.3.1;
 * @assertion: Boolean.prototype has the attribute DontEnum;
 * @description: Checking if enumerating the Boolean.prototype property fails;
 */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.6.3.1_A4",

path: "15_Native\15.6_Boolean_Objects\15.6.3_Properties_of_the_Boolean_Constructor\15.6.3.1_Boolean.prototype\S15.6.3.1_A4.js",

assertion: "Boolean.prototype has the attribute DontEnum",

description: "Checking if enumerating the Boolean.prototype property fails",

test: function testcase() {
   //CHECK#1
for(x in Boolean) {
  if(x === "prototype") {
    $ERROR('#1: Boolean.prototype has the attribute DontEnum');
  }
}

if (Boolean.propertyIsEnumerable('prototype')) {
  $ERROR('#2: Boolean.prototype has the attribute DontEnum');
}

 }
});

