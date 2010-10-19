// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S11.4.9_A3_T5;
* @section: 11.4.9;
* @assertion: Operator !x returns !ToBoolean(x);
* @description: Type(x) is Object object or Function object;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.4.9_A3_T5",

path: "11.4.9",

description: "Type(x) is Object object or Function object",

test: function testcase() {
   //CHECK#1
if ((!{}) !== false) {
  $ERROR('#1: !({}) === false');
}

//CHECK#2  
if (!(function(){return 1}) !== false) {
  $ERROR('#2: !(function(){return 1}) === false');
}

 }
});

