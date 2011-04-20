// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.4.4.3_A4.5;
* @section: 15.4.4.3, 15.2.4.7, 12.6.4;
* @assertion: The toLocaleString property of Array has the attribute DontEnum;
* @description: Checking use propertyIsEnumerable, for-in;
*/



// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.4.4.3_A4.5",

path: "15_Native\15.4_Array_Objects\15.4.4_Properties_of_the_Array_Prototype_Object\15.4.4.3_Array_prototype_toLocaleString\S15.4.4.3_A4.5.js",

assertion: "The toLocaleString property of Array has the attribute DontEnum",

description: "Checking use propertyIsEnumerable, for-in",

test: function testcase() {
   //CHECK#1
if (Array.propertyIsEnumerable('toLocaleString') !== false) {
  $ERROR('#1: Array.propertyIsEnumerable(\'toLocaleString\') === false. Actual: ' + (Array.propertyIsEnumerable('toLocaleString')));
}

//CHECK#2
var result = true;
for (var p in Array){
  if (p === "toLocaleString") {
    result = false;
  }  
}

if (result !== true) {
  $ERROR('#2: result = true; for (p in Array) { if (p === "toLocaleString") result = false; }  result === true;');
}


 }
});

