// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.1.3.2_A5.1;
 * @section: 15.1.3.2, 15.2.4.7, 12.6.4;
 * @assertion: The length property of decodeURIComponent has the attribute DontEnum;
 * @description: Checking use propertyIsEnumerable, for-in;
*/



// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.1.3.2_A5.1",

path: "15_Native\15.1_The_Global_Object\15.1.3_URI_Handling_Function_Properties\15.1.3.2_decodeURIComponent\S15.1.3.2_A5.1.js",

assertion: "The length property of decodeURIComponent has the attribute DontEnum",

description: "Checking use propertyIsEnumerable, for-in",

test: function testcase() {
   //CHECK#1
if (decodeURIComponent.propertyIsEnumerable('length') !== false) {
  $ERROR('#1: decodeURIComponent.propertyIsEnumerable(\'length\') === false. Actual: ' + (decodeURIComponent.propertyIsEnumerable('length')));
}

//CHECK#2
result = true;
for (p in decodeURIComponent){
  if (p === "length") {
    result = false;
  }  
}

if (result !== true) {
  $ERROR('#2: result = true; for (p in decodeURIComponent) { if (p === "length") result = false; }  result === true;');
}

 }
});

