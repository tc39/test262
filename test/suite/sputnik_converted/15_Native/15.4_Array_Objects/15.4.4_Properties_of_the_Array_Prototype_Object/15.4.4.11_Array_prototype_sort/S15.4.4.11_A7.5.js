// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.4.4.11_A7.5;
* @section: 15.4.4.11, 15.2.4.7, 12.6.4;
* @assertion: The sort property of Array has the attribute DontEnum;
* @description: Checking use propertyIsEnumerable, for-in;
*/



// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.4.4.11_A7.5",

path: "15_Native\15.4_Array_Objects\15.4.4_Properties_of_the_Array_Prototype_Object\15.4.4.11_Array_prototype_sort\S15.4.4.11_A7.5.js",

assertion: "The sort property of Array has the attribute DontEnum",

description: "Checking use propertyIsEnumerable, for-in",

test: function testcase() {
   //CHECK#1
if (Array.propertyIsEnumerable('sort') !== false) {
  $ERROR('#1: Array.propertyIsEnumerable(\'sort\') === false. Actual: ' + (Array.propertyIsEnumerable('sort')));
}

//CHECK#2
var result = true;
for (var p in Array){
  if (p === "sort") {
    result = false;
  }  
}

if (result !== true) {
  $ERROR('#2: result = true; for (p in Array) { if (p === "sort") result = false; }  result === true;');
}


 }
});

