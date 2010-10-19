// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.2.4_A3;
* @section: 15.2.4;
* @assertion: Since the Object prototype object is not a function, it has not [[call]] method;
* @description: Checking if calling Object prototype as a function fails;
*/



// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.2.4_A3",

path: "15.2.4",

description: "Checking if calling Object prototype as a function fails",

test: function testcase() {
   //CHECK#1
try {
  Object.prototype();
  $FAIL('#1: Since Object prototype object is not function it has not [[call]] method');
} catch (e) {
  $PRINT(e);
}

 }
});

