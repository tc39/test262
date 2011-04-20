// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.4.4.10_A3_T3;
 * @section: 15.4.4.10;
 * @assertion: Check ToUint32(length) for non Array objects;
 * @description: length = -1; 
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.4.4.10_A3_T3",

path: "15_Native\15.4_Array_Objects\15.4.4_Properties_of_the_Array_Prototype_Object\15.4.4.10_Array_prototype_slice\S15.4.4.10_A3_T3.js",

assertion: "Check ToUint32(length) for non Array objects",

description: "length = -1",

test: function testcase() {
   var obj = {};
obj.slice = Array.prototype.slice;
obj[4294967294] = "x";
obj.length = -1;
var arr = obj.slice(4294967294,4294967295);

//CHECK#1
if (arr.length !== 1) {
  $ERROR('#1: var obj = {}; obj.slice = Array.prototype.slice; obj[4294967294] = "x"; obj.length = 4294967295; var arr = obj.slice(4294967294,4294967295); arr.length === 1. Actual: ' + (arr.length));
}

//CHECK#3
if (arr[0] !== "x") {
   $ERROR('#3: var obj = {}; obj.slice = Array.prototype.slice; obj[4294967294] = "x"; obj.length = 4294967295; var arr = obj.slice(4294967294,4294967295); arr[0] === "x". Actual: ' + (arr[0]));
}  

 }
});

