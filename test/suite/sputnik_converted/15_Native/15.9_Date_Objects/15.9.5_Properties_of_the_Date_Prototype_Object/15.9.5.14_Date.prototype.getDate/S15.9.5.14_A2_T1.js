// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.9.5.14_A2_T1;
 * @section: 15.9.5.14;
 * @assertion: The "length" property of the "getDate" is 0;
 * @description: The "length" property of the "getDate" is 0;
 */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.9.5.14_A2_T1",

path: "15.9.5.14",

description: "The \"length\" property of the \"getDate\" is 0",

test: function testcase() {
   if(Date.prototype.getDate.hasOwnProperty("length") !== true){
  $ERROR('#1: The getDate has a "length" property');
}

if(Date.prototype.getDate.length !== 0){
  $ERROR('#2: The "length" property of the getDate is 0');
}


 }
});

