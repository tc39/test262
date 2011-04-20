// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.4.4.12_A3_T3;
 * @section: 15.4.4.12;
 * @assertion: Check ToUint32(length) for non Array objects;
 * @description: length is arbitrarily; 
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.4.4.12_A3_T3",

path: "15_Native\15.4_Array_Objects\15.4.4_Properties_of_the_Array_Prototype_Object\15.4.4.12_Array_prototype_splice\S15.4.4.12_A3_T3.js",

assertion: "Check ToUint32(length) for non Array objects",

description: "length is arbitrarily",

test: function testcase() {
   var obj = {};
obj.splice = Array.prototype.splice;
obj[4294967294] = "x";
obj.length = -1;
var arr = obj.splice(4294967294,1);

//CHECK#1
if (arr.length !== 1) {
  $ERROR('#1: var obj = {}; obj.splice = Array.prototype.splice; obj[4294967294] = "x"; obj.length = -1; var arr = obj.splice(4294967294,1); arr.length === 1. Actual: ' + (arr.length));
}

//CHECK#2
if (arr[0] !== "x") {
   $ERROR('#2: var obj = {}; obj.splice = Array.prototype.splice; obj[4294967294] = "x"; obj.length = 1; var arr = obj.splice(4294967294,1); arr[0] === "x". Actual: ' + (arr[0]));
} 

//CHECK#3
if (obj.length !== 4294967294) {
   $ERROR('#3: var obj = {}; obj.splice = Array.prototype.splice; obj[4294967294] = "x"; obj.length = 1; var arr = obj.splice(4294967294,1); obj.length === 4294967294. Actual: ' + (obj.length));
}

//CHECK#4
if (obj[4294967294] !== undefined) {
   $ERROR('#4: var obj = {}; obj.splice = Array.prototype.splice; obj[4294967294] = "x"; obj.length = 1; var arr = obj.splice(4294967294,1); obj[4294967294] === undefined. Actual: ' + (obj[4294967294]));
} 

 }
});

