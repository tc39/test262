// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S7.8.5_A4.1;
 * @section: 7.8.5;
 * @assertion: A regular expression literal is an input element that is converted to 
 * a RegExp object when it is scanned; 
 * @description: Check ((/(?:)/ instanceof RegExp) === true); 
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S7.8.5_A4.1",

path: "7.8.5",

description: "Check ((/(?:)/ instanceof RegExp) === true)",

test: function testcase() {
   //CHECK#1
if ((/(?:)/ instanceof RegExp) !== true) {
  $ERROR('#1: (/(?:)/ instanceof RegExp) === true. Actual: ' + ((/(?:)/ instanceof RegExp)));
}   
   

 }
});

