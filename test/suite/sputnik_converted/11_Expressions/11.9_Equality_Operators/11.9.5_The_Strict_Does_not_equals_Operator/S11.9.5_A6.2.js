// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S11.9.5_A6.2;
 * @section: 11.9.5, 11.9.6;
 * @assertion: If Type(x) and Type(y) are Null-s, return false;
 * @description: null === null;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.9.5_A6.2",

path: "11_Expressions\11.9_Equality_Operators\11.9.5_The_Strict_Does_not_equals_Operator\S11.9.5_A6.2.js",

assertion: "If Type(x) and Type(y) are Null-s, return false",

description: "null === null",

test: function testcase() {
   //CHECK#1
if (null !== null) {
  $ERROR('#1: null === null');
}

 }
});

