// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S11.4.9_A3_T1;
* @section: 11.4.9;
* @assertion: Operator !x returns !ToBoolean(x);
* @description: Type(x) is boolean primitive or Boolean object;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.4.9_A3_T1",

path: "11.4.9",

description: "Type(x) is boolean primitive or Boolean object",

test: function testcase() {
   //CHECK#1
if (!false !== true) {
  $ERROR('#1: !false === true');
}

//CHECK#2
if (!new Boolean(true) !== false) {
  $ERROR('#2: !new Boolean(true) === false');
}

//CHECK#3
if (!new Boolean(false) !== false) {
  $ERROR('#3: !new Boolean(false) === false');
}

 }
});

