// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S11.11.2_A3_T4;
* @section: 11.11.2;
* @assertion: If ToBoolean(x) is false, return y;
* @description: Type(x) or Type(y) is changed between null and undefined;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.11.2_A3_T4",

path: "11_Expressions\11.11_Binary_Logical_Operators\11.11.2_Logical_OR_Operator\S11.11.2_A3_T4.js",

assertion: "If ToBoolean(x) is false, return y",

description: "Type(x) or Type(y) is changed between null and undefined",

test: function testcase() {
   //CHECK#1
if ((false || undefined) !== undefined) {
  $ERROR('#1: (false || undefined) === undefined');
}

//CHECK#2
if ((false || null) !== null) {
  $ERROR('#2: (false || null) === null');
}

 }
});

