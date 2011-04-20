// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.7.4.5_A2_T01;
 * @section: 15.7.4.5;
 * @assertion: The length property of the toFixed method is 1;
 * @description: Checking Number prototype itself;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.7.4.5_A2_T01",

path: "15_Native\15.7_Number_Objects\15.7.4_Properties_of_the_Number_Prototype_Object\15.7.4.5_Number.prototype.toFixed\S15.7.4.5_A2_T01.js",

assertion: "The length property of the toFixed method is 1",

description: "Checking Number prototype itself",

test: function testcase() {
   //CHECK#1
if(Number.prototype.toFixed.hasOwnProperty("length") !== true){
  $ERROR('#1: The length property of the toFixed method is 1');
}

//CHECK#2
if(Number.prototype.toFixed.length !== 1){
  $ERROR('#2: The length property of the toFixed method is 1');
}

 }
});

