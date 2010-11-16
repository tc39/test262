// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S11.11.2_A2.1_T4;
* @section: 11.11.2, 8.7.1, 16;
* @assertion: Operator x || y uses GetValue;
* @description: If ToBoolean(x) is true and GetBase(y) is null, return true;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.11.2_A2.1_T4",

path: "11.11.2, 8.7.1, 16",

description: "If ToBoolean(x) is true and GetBase(y) is null, return true",

test: function testcase() {
   //CHECK#1
if ((true || x) !== true) {
  $ERROR('#1: (true || x) === true');
}

 }
});

