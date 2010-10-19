// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.9.5.7_A2_T1;
 * @section: 15.9.5.7;
 * @assertion: The "length" property of the "toLocaleTimeString" is 0;
 * @description: The "length" property of the "toLocaleTimeString" is 0;
 */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.9.5.7_A2_T1",

path: "15.9.5.7",

description: "The \"length\" property of the \"toLocaleTimeString\" is 0",

test: function testcase() {
   if(Date.prototype.toLocaleTimeString.hasOwnProperty("length") !== true){
  $ERROR('#1: The toLocaleTimeString has a "length" property');
}

if(Date.prototype.toLocaleTimeString.length !== 0){
  $ERROR('#2: The "length" property of the toLocaleTimeString is 0');
}


 }
});

