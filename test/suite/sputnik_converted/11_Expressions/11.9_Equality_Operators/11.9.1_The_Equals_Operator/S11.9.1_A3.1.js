// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S11.9.1_A3.1;
 * @section: 11.9.1, 11.9.3;
 * @assertion: Return true, if x and y are both true or both false; otherwise, return false;
 * @description: x and y are boolean primitives;
 */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.9.1_A3.1",

path: "11_Expressions\11.9_Equality_Operators\11.9.1_The_Equals_Operator\S11.9.1_A3.1.js",

assertion: "Return true, if x and y are both true or both false; otherwise, return false",

description: "x and y are boolean primitives",

test: function testcase() {
   //CHECK#1
if ((true == true) !== true) {
  $ERROR('#1: (true == true) === true');
}

//CHECK#2
if ((false == false) !== true) {
  $ERROR('#2: (false == false) === true');
}

//CHECK#3
if ((true == false) !== false) {
  $ERROR('#3: (true == false) === false');
}

//CHECK#4
if ((false == true) !== false) {
  $ERROR('#4: (false == true) === false');
}

 }
});

