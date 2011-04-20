// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.4.4.11_A1.2_T1;
 * @section: 15.4.4.11;
 * @assertion: If this object does not have a property named by 
 * ToString(j), return 1. If this object does not have a property 
 * named by ToString(k), return -1;
 * @description: If comparefn is undefined, use SortCompare operator; 
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.4.4.11_A1.2_T1",

path: "15_Native\15.4_Array_Objects\15.4.4_Properties_of_the_Array_Prototype_Object\15.4.4.11_Array_prototype_sort\S15.4.4.11_A1.2_T1.js",

assertion: "If this object does not have a property named by",

description: "If comparefn is undefined, use SortCompare operator",

test: function testcase() {
   var x = new Array(2);
x[1] = 1; 
x.sort();

//CHECK#1
if (x.length !== 2) {
  $ERROR('#1: var x = new Array(2); x[1] = 1;  x.sort(); x.length === 2. Actual: ' + (x.length));
}

//CHECK#2
if (x[0] !== 1) {
  $ERROR('#2: var x = new Array(2); x[1] = 1;  x.sort(); x[0] === 1. Actual: ' + (x[0]));
}    

//CHECK#3
if (x[1] !== undefined) {
  $ERROR('#3: var x = new Array(2); x[1] = 1;  x.sort(); x[1] === undefined. Actual: ' + (x[1]));
}

var x = new Array(2);
x[0] = 1; 
x.sort();

//CHECK#4
if (x.length !== 2) {
  $ERROR('#4: var x = new Array(2); x[0] = 1;  x.sort(); x.length === 2. Actual: ' + (x.length));
}

//CHECK#5
if (x[0] !== 1) {
  $ERROR('#5: var x = new Array(2); x[0] = 1;  x.sort(); x[0] === 1. Actual: ' + (x[0]));
}    

//CHECK#6
if (x[1] !== undefined) {
  $ERROR('#6: var x = new Array(2); x[0] = 1;  x.sort(); x[1] === undefined. Actual: ' + (x[1]));
}  

 }
});

