// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S11.10.3_A2.1_T1;
 * @section: 11.10.3;
 * @assertion: Operator x | y uses GetValue;
 * @description: Either Type is not Reference or GetBase is not null;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.10.3_A2.1_T1",

path: "11_Expressions\11.10_Binary_Bitwise_Operators\11.10.3_OR_Operator\S11.10.3_A2.1_T1.js",

assertion: "Operator x | y uses GetValue",

description: "Either Type is not Reference or GetBase is not null",

test: function testcase() {
   //CHECK#1
if ((1 | 0) !== 1) {
  $ERROR('#1: (1 | 0) === 1. Actual: ' + ((1 | 0)));
}

//CHECK#2
var x = 1;
if ((x | 0) !== 1) {
  $ERROR('#2: var x = 1; (x | 0) === 1. Actual: ' + ((x | 0)));
}

//CHECK#3
var y = 0;
if ((1 | y) !== 1) {
  $ERROR('#3: var y = 0; (1 | y) === 1. Actual: ' + ((1 | y)));
}

//CHECK#4
var x = 1;
var y = 0;
if ((x | y) !== 1) {
  $ERROR('#4: var x = 1; var y = 0; (x | y) === 1. Actual: ' + ((x | y)));
}

//CHECK#5
var objectx = new Object();
var objecty = new Object();
objectx.prop = 1;
objecty.prop = 0;
if ((objectx.prop | objecty.prop) !== 1) {
  $ERROR('#5: var objectx = new Object(); var objecty = new Object(); objectx.prop = 1; objecty.prop = 0; (objectx.prop | objecty.prop) === 1. Actual: ' + ((objectx.prop | objecty.prop)));
}

 }
});

