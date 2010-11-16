// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S10.1.5_A2.2_T1;
 * @section: 10.1.5, 15.1;
 * @assertion: Global object properties have attributes { DontEnum };
 * @description: Function execution context - Value Properties;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S10.1.5_A2.2_T1",

path: "10.1.5, 15.1",

description: "Function execution context - Value Properties",

test: function testcase() {
   function test() {
  //CHECK#1
  for (var x in this) {
    if ( x === 'NaN' ) {
      $ERROR("#1: 'NaN' have attribute DontEnum");
    } else if ( x === 'Infinity' ) {
      $ERROR("#1: 'Infinity' have attribute DontEnum");
    } else if ( x === 'undefined' ) {
      $ERROR("#1: 'undefined' have attribute DontEnum");
    } 
  }
}

test();

 }
});

