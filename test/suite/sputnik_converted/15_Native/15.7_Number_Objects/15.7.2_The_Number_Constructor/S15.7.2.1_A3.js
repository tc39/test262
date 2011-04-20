// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.7.2.1_A3;
 * @section: 15.7.2.1;
 * @assertion: The [[Value]] property of the newly constructed object 
 * is set to ToNumber(value) if value was supplied, else to +0;
 * @description: Checking value of the newly created object;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.7.2.1_A3",

path: "15_Native\15.7_Number_Objects\15.7.2_The_Number_Constructor\S15.7.2.1_A3.js",

assertion: "The [[Value]] property of the newly constructed object",

description: "Checking value of the newly created object",

test: function testcase() {
   //CHECK#1
var x1 = new Number(1);
if (x1.valueOf() !== 1) {
  $ERROR('#1: var x1 = new Number(1); x1.valueOf() === 1');
}

//CHECK#2
var x2 = new Number();
if (x2.valueOf() !== 0) {
  $ERROR('#2.1: var x2 = new Number(); x2.valueOf() === 0');
} else if( 1/x2.valueOf() !== Number.POSITIVE_INFINITY ) {
  $ERROR('#2.2: var x2 = new Number(); x2.valueOf() === +0');
}

 }
});

