// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S11.8.2_A4.4;
* @section: 11.8.2, 11.8.5;
* @assertion: If either variable x or y is +0 and the other is -0, return false;
* @description: Checking all combinations;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.8.2_A4.4",

path: "11_Expressions\11.8_Relational_Operators\11.8.2_The_Greater_than_Operator\S11.8.2_A4.4.js",

assertion: "If either variable x or y is +0 and the other is -0, return false",

description: "Checking all combinations",

test: function testcase() {
   //CHECK#1
if ((0 > 0) !== false) {
  $ERROR('#1: (0 > 0) === false');
}

//CHECK#2
if ((-0 > -0) !== false) {
  $ERROR('#2: (-0 > -0) === false');
}

//CHECK#3
if ((+0 > -0) !== false) {
  $ERROR('#3: (+0 > -0) === false');
}

//CHECK#4
if ((-0 > +0) !== false) {
  $ERROR('#4: (-0 > +0) === false');
}


 }
});

