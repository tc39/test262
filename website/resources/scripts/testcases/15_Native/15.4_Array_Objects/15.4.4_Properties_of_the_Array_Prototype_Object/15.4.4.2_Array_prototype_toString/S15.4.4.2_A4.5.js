// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.4.4.2_A4.5;
* @section: 15.4.4.2, 15.2.4.7, 12.6.4;
* @assertion: The toString property of Array has the attribute DontEnum;
* @description: Checking use propertyIsEnumerable, for-in;
*/



// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.4.4.2_A4.5",

path: "15.4.4.2, 15.2.4.7, 12.6.4",

description: "Checking use propertyIsEnumerable, for-in",

test: function testcase() {
   //CHECK#1
if (Array.propertyIsEnumerable('toString') !== false) {
  $ERROR('#1: Array.propertyIsEnumerable(\'toString\') === false. Actual: ' + (Array.propertyIsEnumerable('toString')));
}

//CHECK#2
var result = true;
for (var p in Array){
  if (p === "toString") {
    result = false;
  }  
}

if (result !== true) {
  $ERROR('#2: result = true; for (p in Array) { if (p === "toString") result = false; }  result === true;');
}


 }
});

