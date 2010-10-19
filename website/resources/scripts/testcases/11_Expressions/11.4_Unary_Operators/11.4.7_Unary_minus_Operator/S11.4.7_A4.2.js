// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S11.4.7_A4.2;
* @section: 11.4.7;
* @assertion: Negating +0 produces -0, negating -0 produces +0;
* @description: Checking Infinity;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.4.7_A4.2",

path: "11.4.7",

description: "Checking Infinity",

test: function testcase() {
   //CHECK#1
var x = 0; 
x = -x;
if (x !== -0) {
  $ERROR('#1.1: var x = 0; x = -x; x === 0. Actual: ' + (x));
} else {
  if (1/x !== Number.NEGATIVE_INFINITY) {
    $ERROR('#1.2: var x = 0; x = -x; x === - 0. Actual: +0');
  }
}

//CHECK#2
var x = -0; 
x = -x;
if (x !== 0) {
  $ERROR('#2.1: var x = -0; x = -x; x === 0. Actual: ' + (x));
} else {
  if (1/x !== Number.POSITIVE_INFINITY) {
    $ERROR('#2.2: var x = -0; x = -x; x === + 0. Actual: -0');
  }
}


 }
});

