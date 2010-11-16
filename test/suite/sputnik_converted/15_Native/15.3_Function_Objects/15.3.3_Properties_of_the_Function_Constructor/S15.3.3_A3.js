// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.3.3_A3;
* @section: 15.3.3, 15.3.4;
* @assertion: Function constructor has length property whose value is 1;
* @description: Checking Function.length property;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.3.3_A3",

path: "15.3.3, 15.3.4",

description: "Checking Function.length property",

test: function testcase() {
   //CHECK#1
if (!Function.hasOwnProperty("length")){
  $ERROR('#1: Function constructor has length property');
}

//CHECK#2
if (Function.length !== 1) {
  $ERROR('#2: Function constructor length property value is 1');
}

 }
});

