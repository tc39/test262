// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.9.5.39_A2_T1;
 * @section: 15.9.5.39;
 * @assertion: The "length" property of the "setUTCMonth" is 2;
 * @description: The "length" property of the "setUTCMonth" is 2;
 */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.9.5.39_A2_T1",

path: "15.9.5.39",

description: "The \"length\" property of the \"setUTCMonth\" is 2",

test: function testcase() {
   if(Date.prototype.setUTCMonth.hasOwnProperty("length") !== true){
  $ERROR('#1: The setUTCMonth has a "length" property');
}

if(Date.prototype.setUTCMonth.length !== 2){
  $ERROR('#2: The "length" property of the setUTCMonth is 2');
}


 }
});

