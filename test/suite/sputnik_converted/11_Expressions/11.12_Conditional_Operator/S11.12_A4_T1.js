// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S11.12_A4_T1;
* @section: 11.12;
* @assertion: If ToBoolean(x) is true, return y;
* @description: Type(y) and Type(z) are boolean primitives;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.12_A4_T1",

path: "11.12",

description: "Type(y) and Type(z) are boolean primitives",

test: function testcase() {
   //CHECK#1
if ((true ? false : true) !== false) {
  $ERROR('#1: (true ? false : true) === false');
}

//CHECK#2
var y = new Boolean(true);
if ((true ? y : false) !== y) {
  $ERROR('#2: (var y = new Boolean(true); (true ? y : false) === y');
}

//CHECK#3
var y = new Boolean(false);
if ((y ? y : true) !== y) {
  $ERROR('#3: (var y = new Boolean(false); (y ? y : true) === y');
}

 }
});

