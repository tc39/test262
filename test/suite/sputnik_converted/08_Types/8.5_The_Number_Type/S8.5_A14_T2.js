// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S8.5_A14_T2;
 * @section: 8.5, 7.8.3;
 * @assertion: When number absolute value is bigger of 2**1024 should convert to Infinity;
 * @description: Create number smaller of -2**1024; 
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S8.5_A14_T2",

path: "08_Types\8.5_The_Number_Type\S8.5_A14_T2.js",

assertion: "When number absolute value is bigger of 2**1024 should convert to Infinity",

description: "Create number smaller of -2**1024",

test: function testcase() {
   //CHECK #1 
if (-1e+308*3 !== -Infinity){
  $ERROR('#1: -1e+308*3 === Infinity. Actual: ' + (-1e+308*3));
}

//CHECK #2 
if ((-1*(Math.pow(2,53))*(Math.pow(2,971))) !== -Infinity){
  $ERROR('#2: (-1*(Math.pow(2,53))*(Math.pow(2,971))) === Infinity. Actual: ' + ((-1*(Math.pow(2,53))*(Math.pow(2,971)))));
}

 }
});

