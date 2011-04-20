// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S8.5_A12.2;
 * @section: 8.5, 7.8.3;
 * @assertion: -Infinity is the same as Number.NEGATIVE_INFINITY;
 * @description: Compare -Infinity with Number.NEGATIVE_INFINITY; 
*/



// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S8.5_A12.2",

path: "08_Types\8.5_The_Number_Type\S8.5_A12.2.js",

assertion: "-Infinity is the same as Number.NEGATIVE_INFINITY",

description: "Compare -Infinity with Number.NEGATIVE_INFINITY",

test: function testcase() {
   var n_inf=-Infinity;

//CHECK #1 
if (n_inf !== Number.NEGATIVE_INFINITY){
  $ERROR('#1: -Infinity is the same as Number.NEGATIVE_INFINITY');
}

 }
});

