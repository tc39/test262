// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.4.4.8_A3_T3;
 * @section: 15.4.4.8;
 * @assertion: Check ToUint32(length) for non Array objects;
 * @description: length = -4294967294; 
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.4.4.8_A3_T3",

path: "15_Native\15.4_Array_Objects\15.4.4_Properties_of_the_Array_Prototype_Object\15.4.4.8_Array_prototype_reverse\S15.4.4.8_A3_T3.js",

assertion: "Check ToUint32(length) for non Array objects",

description: "length = -4294967294",

test: function testcase() {
   var obj = {};
obj.reverse = Array.prototype.reverse;
obj[0] = "x";
obj[1] = "y";
obj[2] = "z";
obj.length = -4294967294;

//CHECK#1
var reverse = obj.reverse();
if (reverse !== obj) {
  $ERROR('#1: var obj = {}; obj.reverse = Array.prototype.reverse; obj[0] = "x"; obj[1] = "y"; obj[2] = "z"; obj.length = -4294967294; obj.reverse() === obj. Actual: ' + (reverse));
}

//CHECK#2
if (obj.length !== -4294967294) {
  $ERROR('#2: var obj = {}; obj.reverse = Array.prototype.reverse; obj[0] = "x"; obj[1] = "y"; obj[2] = "z"; obj.length = -4294967294; obj.reverse(); obj.length === -4294967294. Actual: ' + (obj.length));
}

//CHECK#3
if (obj[0] !== "y") {
  $ERROR('#3: var obj = {}; obj.reverse = Array.prototype.reverse; obj[0] = "x"; obj[1] = "y"; obj[2] = "z"; obj.length = -4294967294; obj.reverse(); obj[0] === "y". Actual: ' + (obj[0]));
}   

//CHECK#4
if (obj[1] !== "x") {
  $ERROR('#4: var obj = {}; obj.reverse = Array.prototype.reverse; obj[0] = "x"; obj[1] = "y"; obj[2] = "z"; obj.length = -4294967294; obj.reverse(); obj[1] === "x". Actual: ' + (obj[1]));
} 

//CHECK#5
if (obj[2] !== "z") {
  $ERROR('#5: var obj = {}; obj.reverse = Array.prototype.reverse; obj[0] = "x"; obj[1] = "y"; obj[2] = "z"; obj.length = -4294967294; obj.reverse(); obj[2] === "z". Actual: ' + (obj[2]));
}  

 }
});

