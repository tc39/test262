// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.4.4.10_A2.1_T3;
 * @section: 15.4.4.10;
 * @assertion: Operator use ToInteger from start;
 * @description: start = Infinity;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.4.4.10_A2.1_T3",

path: "15_Native\15.4_Array_Objects\15.4.4_Properties_of_the_Array_Prototype_Object\15.4.4.10_Array_prototype_slice\S15.4.4.10_A2.1_T3.js",

assertion: "Operator use ToInteger from start",

description: "start = Infinity",

test: function testcase() {
   var x = [0,1,2,3,4];
var arr = x.slice(Number.POSITIVE_INFINITY,3);

//CHECK#1
arr.getClass = Object.prototype.toString;
if (arr.getClass() !== "[object " + "Array" + "]") {
  $ERROR('#1: var x = [0,1,2,3,4]; var arr = x.slice(Number.POSITIVE_INFINITY,3); arr is Array object. Actual: ' + (arr.getClass()));
}

//CHECK#2
if (arr.length !== 0) {
  $ERROR('#2: var x = [0,1,2,3,4]; var arr = x.slice(Number.POSITIVE_INFINITY,3); arr.length === 0. Actual: ' + (arr.length));
}      

//CHECK#3
if (arr[0] !== undefined) {
  $ERROR('#3: var x = [0,1,2,3,4]; var arr = x.slice(Number.POSITIVE_INFINITY,3); arr[0] === undefined. Actual: ' + (arr[0]));
}

 }
});

