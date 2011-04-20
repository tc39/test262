// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.4.4.10_A5.5;
* @section: 15.4.4.10, 15.2.4.7, 12.6.4;
* @assertion: The slice property of Array has the attribute DontEnum;
* @description: Checking use propertyIsEnumerable, for-in;
*/



// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.4.4.10_A5.5",

path: "15_Native\15.4_Array_Objects\15.4.4_Properties_of_the_Array_Prototype_Object\15.4.4.10_Array_prototype_slice\S15.4.4.10_A5.5.js",

assertion: "The slice property of Array has the attribute DontEnum",

description: "Checking use propertyIsEnumerable, for-in",

test: function testcase() {
   //CHECK#1
if (Array.propertyIsEnumerable('slice') !== false) {
  $ERROR('#1: Array.propertyIsEnumerable(\'slice\') === false. Actual: ' + (Array.propertyIsEnumerable('slice')));
}

//CHECK#2
var result = true;
for (var p in Array){
  if (p === "slice") {
    result = false;
  }  
}

if (result !== true) {
  $ERROR('#2: result = true; for (p in Array) { if (p === "slice") result = false; }  result === true;');
}


 }
});

