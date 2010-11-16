// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S8.5_A9;
 * @section: 8.5, 7.8.3;
 * @assertion: Globally defined variable NaN has not been altered by program execution;
 * @description: Try alter globally defined variable NaN;
 * @strict_mode_negative
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S8.5_A9",

path: "8.5, 7.8.3",

description: "Try alter globally defined variable NaN",

test: function testcase() {
   Number.NaN = 1;

if (Number.NaN === 1) {
  $ERROR('#1: Globally defined variable NaN has not been altered by program execution');
}

 }
});

