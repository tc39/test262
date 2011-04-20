// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.4.4.6_A3_T2;
 * @section: 15.4.4.6;
 * @assertion: Check ToUint32(length) for non Array objects;
 * @description: length = 4294967297; 
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.4.4.6_A3_T2",

path: "15_Native\15.4_Array_Objects\15.4.4_Properties_of_the_Array_Prototype_Object\15.4.4.6_Array_prototype_pop\S15.4.4.6_A3_T2.js",

assertion: "Check ToUint32(length) for non Array objects",

description: "length = 4294967297",

test: function testcase() {
   var obj = {};
obj.pop = Array.prototype.pop;
obj[0] = "x";
obj[4294967296] = "y";
obj.length = 4294967297;

//CHECK#1
var pop = obj.pop();
if (pop !== "x") {
  $ERROR('#1: var obj = {}; obj.pop = Array.prototype.pop; obj[0] = "x"; obj[4294967296] = "y"; obj.length = 4294967297; obj.pop() === "x". Actual: ' + (pop));
}

//CHECK#2
if (obj.length !== 0) {
  $ERROR('#2: var obj = {}; obj.pop = Array.prototype.pop; obj[0] = "x"; obj[4294967296] = "y"; obj.length = 4294967297; obj.pop(); obj.length === 0. Actual: ' + (obj.length));
}

//CHECK#3
if (obj[0] !== undefined) {
   $ERROR('#3: var obj = {}; obj.pop = Array.prototype.pop; obj[0] = "x"; obj[4294967296] = "y"; obj.length = 4294967297; obj.pop(); obj[0] === undefined. Actual: ' + (obj[0]));
}

//CHECK#4
if (obj[4294967296] !== "y") {
   $ERROR('#4: var obj = {}; obj.pop = Array.prototype.pop; obj[0] = "x"; obj[4294967296] = "y"; obj.length = 4294967297; obj.pop(); obj[4294967296] === "y". Actual: ' + (obj[4294967296]));
}  

 }
});

