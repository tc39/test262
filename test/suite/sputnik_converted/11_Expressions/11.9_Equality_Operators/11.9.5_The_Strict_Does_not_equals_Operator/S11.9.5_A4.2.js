// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S11.9.5_A4.2;
 * @section: 11.9.5, 11.9.6;
 * @assertion: If x is +0(-0) and y is -0(+0), return false;
 * @description: Checking all combinations;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.9.5_A4.2",

path: "11_Expressions\11.9_Equality_Operators\11.9.5_The_Strict_Does_not_equals_Operator\S11.9.5_A4.2.js",

assertion: "If x is +0(-0) and y is -0(+0), return false",

description: "Checking all combinations",

test: function testcase() {
   //CHECK#1
if (+0 !== -0) {
  $ERROR('#1: +0 === -0');
}

//CHECK#2
if (-0 !== +0) {
  $ERROR('#2: -0 === +0');
}

 }
});

