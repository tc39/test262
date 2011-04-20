// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S11.4.7_A2.1_T1;
* @section: 11.4.7;
* @assertion: Operator -x uses GetValue;
* @description: Either Type(x) is not Reference or GetBase(x) is not null;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.4.7_A2.1_T1",

path: "11_Expressions\11.4_Unary_Operators\11.4.7_Unary_minus_Operator\S11.4.7_A2.1_T1.js",

assertion: "Operator -x uses GetValue",

description: "Either Type(x) is not Reference or GetBase(x) is not null",

test: function testcase() {
   //CHECK#1
if (-1 !== -1) {
  $ERROR('#1: -1 === -1. Actual: ' + (-1));
}

//CHECK#2
if (-(-1) !== 1) {
  $ERROR('#2: -(-1) === -1. Actual: ' + (-(-1)));
}

//CHECK#3
var x = -1;
if (-x !== 1) {
  $ERROR('#3: var x = -1; -x === 1. Actual: ' + (-x));
}

//CHECK#4
var x = -1;
if (-(-x) !== -1) {
  $ERROR('#4: var x = -1; -(-x) === -1. Actual: ' + (-(-x)));
}

//CHECK#5
var object = new Object();
object.prop = 1;
if (-object.prop !== -1) {
  $ERROR('#5: var object = new Object(); object.prop = -1; -object.prop === -1. Actual: ' + (-object.prop));
}

 }
});

