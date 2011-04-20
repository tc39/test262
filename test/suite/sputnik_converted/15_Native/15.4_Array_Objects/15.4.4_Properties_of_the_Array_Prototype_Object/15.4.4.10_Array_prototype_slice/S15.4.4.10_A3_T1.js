// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.4.4.10_A3_T1;
 * @section: 15.4.4.10;
 * @assertion: Check ToUint32(length) for non Array objects;
 * @description: length = 4294967296; 
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.4.4.10_A3_T1",

path: "15_Native\15.4_Array_Objects\15.4.4_Properties_of_the_Array_Prototype_Object\15.4.4.10_Array_prototype_slice\S15.4.4.10_A3_T1.js",

assertion: "Check ToUint32(length) for non Array objects",

description: "length = 4294967296",

test: function testcase() {
   var obj = {};
obj.slice = Array.prototype.slice;
obj[0] = "x";
obj[4294967295] = "y";
obj.length = 4294967296;
var arr = obj.slice(0,4294967296);

//CHECK#1
if (arr.length !== 0) {
  $ERROR('#1: var obj = {}; obj.slice = Array.prototype.slice; obj[0] = "x"; obj[4294967295] = "y"; obj.length = 4294967296; var arr = obj.slice(0,4294967296); arr.length === 0. Actual: ' + (arr.length));
}

//CHECK#2
if (arr[0] !== undefined) {
   $ERROR('#2: var obj = {}; obj.slice = Array.prototype.slice; obj[0] = "x"; obj[4294967295] = "y"; obj.length = 4294967296; var arr = obj.slice(0,4294967296); arr[0] === undefined. Actual: ' + (arr[0]));
}  

//CHECK#3
if (arr[4294967295] !== undefined) {
   $ERROR('#3: var obj = {}; obj.slice = Array.prototype.slice; obj[0] = "x"; obj[4294967295] = "y"; obj.length = 4294967296; var arr = obj.slice(0,4294967296); arr[4294967295] === undefined. Actual: ' + (arr[4294967295]));
}  

 }
});

