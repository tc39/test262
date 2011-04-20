// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.4.4.12_A2.1_T3;
 * @section: 15.4.4.12;
 * @assertion: Operator use ToInteger from start;
 * @description: start = Infinity;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.4.4.12_A2.1_T3",

path: "15_Native\15.4_Array_Objects\15.4.4_Properties_of_the_Array_Prototype_Object\15.4.4.12_Array_prototype_splice\S15.4.4.12_A2.1_T3.js",

assertion: "Operator use ToInteger from start",

description: "start = Infinity",

test: function testcase() {
   var x = [0,1,2,3];
var arr = x.splice(Number.POSITIVE_INFINITY,3);

//CHECK#1
arr.getClass = Object.prototype.toString;
if (arr.getClass() !== "[object " + "Array" + "]") {
  $ERROR('#1: var x = [0,1,2,3]; var arr = x.splice(Number.POSITIVE_INFINITY,3); arr is Array object. Actual: ' + (arr.getClass()));
}

//CHECK#2
if (arr.length !== 0) {
  $ERROR('#2: var x = [0,1,2,3]; var arr = x.splice(Number.POSITIVE_INFINITY,3); arr.length === 0. Actual: ' + (arr.length));
}      

//CHECK#3
if (x[0] !== 0) {
  $ERROR('#3: var x = [0,1,2,3]; var x = x.splice(Number.POSITIVE_INFINITY,3); x[0] === 0. Actual: ' + (x[0]));
}

//CHECK#4
if (x[1] !== 1) {
  $ERROR('#4: var x = [0,1,2,3]; var x = x.splice(Number.POSITIVE_INFINITY,3); x[1] === 1. Actual: ' + (x[1]));
}      

//CHECK#5
if (x[2] !== 2) {
  $ERROR('#5: var x = [0,1,2,3]; var x = x.splice(Number.POSITIVE_INFINITY,3); x[2] === 2. Actual: ' + (x[2]));
}   

//CHECK#6
if (x[3] !== 3) {
  $ERROR('#6: var x = [0,1,2,3]; var x = x.splice(Number.POSITIVE_INFINITY,3); x[3] === 3. Actual: ' + (x[3]));
} 

 }
});

