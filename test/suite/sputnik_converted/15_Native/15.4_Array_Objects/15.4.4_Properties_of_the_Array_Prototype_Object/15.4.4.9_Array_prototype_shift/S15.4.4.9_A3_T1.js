// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.4.4.9_A3_T1;
 * @section: 15.4.4.9;
 * @assertion: Check ToUint32(length) for non Array objects;
 * @description: length is arbitrarily; 
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.4.4.9_A3_T1",

path: "15_Native\15.4_Array_Objects\15.4.4_Properties_of_the_Array_Prototype_Object\15.4.4.9_Array_prototype_shift\S15.4.4.9_A3_T1.js",

assertion: "Check ToUint32(length) for non Array objects",

description: "length is arbitrarily",

test: function testcase() {
   var obj = {};
obj.shift = Array.prototype.shift;
obj[0] = "x";
obj[4294967295] = "y";
obj.length = 4294967296;

//CHECK#1
var shift = obj.shift();
if (shift !== undefined) {
  $ERROR('#1: var obj = {}; obj.shift = Array.prototype.shift; obj[0] = "x"; obj[4294967295] = "y"; obj.length = 4294967296; obj.shift() === unedfined. Actual: ' + (shift));
}

//CHECK#2
if (obj.length !== 0) {
  $ERROR('#2: var obj = {}; obj.shift = Array.prototype.shift; obj[0] = "x"; obj[4294967295] = "y"; obj.length = 4294967296; obj.shift(); obj.length === 0. Actual: ' + (obj.length));
}

//CHECK#3
if (obj[0] !== "x") {
   $ERROR('#3: var obj = {}; obj.shift = Array.prototype.shift; obj[0] = "x"; obj[4294967295] = "y"; obj.length = 4294967296; obj.shift(); obj[0] === "x". Actual: ' + (obj[0]));
}  

//CHECK#4
if (obj[4294967295] !== "y") {
   $ERROR('#4: var obj = {}; obj.shift = Array.prototype.shift; obj[0] = "x"; obj[4294967295] = "y"; obj.length = 4294967296; obj.shift(); obj[4294967295] === "y". Actual: ' + (obj[4294967295]));
}  

 }
});

