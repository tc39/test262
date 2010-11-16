// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.9.4.2_A2_T1;
 * @section: 15.9.4.2;
 * @assertion: The "length" property of the "parse" is 1;
 * @description: The "length" property of the "parse" is 1;
 */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.9.4.2_A2_T1",

path: "15.9.4.2",

description: "The \"length\" property of the \"parse\" is 1",

test: function testcase() {
   if(Date.parse.hasOwnProperty("length") !== true){
  $ERROR('#1: The parse has a "length" property');
}

if(Date.parse.length !== 1){
  $ERROR('#2: The "length" property of the parse is 1');
}


 }
});

