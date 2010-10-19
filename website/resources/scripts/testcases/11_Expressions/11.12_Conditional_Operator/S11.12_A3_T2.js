// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S11.12_A3_T2;
 * @section: 11.12;
 * @assertion: If ToBoolean(x) is false, return z;
 * @description: Type(y) and Type(z) are number primitives;
 */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.12_A3_T2",

path: "11.12",

description: "Type(y) and Type(z) are number primitives",

test: function testcase() {
   //CHECK#1
if ((0 ? 0 : 1) !== 1) {
  $ERROR('#1: (0 ? 0 : 1) === 1');
}

//CHECK#2
var z = new Number(1);
if ((0 ? 1 : z) !== z) {
  $ERROR('#2: (var y = new Number(1); (0 ? 1 : z) === z');
}

 }
});

