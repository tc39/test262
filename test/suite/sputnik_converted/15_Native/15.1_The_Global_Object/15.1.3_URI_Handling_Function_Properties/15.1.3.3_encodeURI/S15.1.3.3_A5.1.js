// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.1.3.3_A5.1;
 * @section: 15.1.3.3, 15.2.4.7, 12.6.4;
 * @assertion: The length property of encodeURI has the attribute DontEnum;
 * @description: Checking use propertyIsEnumerable, for-in;
*/



// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.1.3.3_A5.1",

path: "15_Native\15.1_The_Global_Object\15.1.3_URI_Handling_Function_Properties\15.1.3.3_encodeURI\S15.1.3.3_A5.1.js",

assertion: "The length property of encodeURI has the attribute DontEnum",

description: "Checking use propertyIsEnumerable, for-in",

test: function testcase() {
   //CHECK#1
if (encodeURI.propertyIsEnumerable('length') !== false) {
  $ERROR('#1: encodeURI.propertyIsEnumerable(\'length\') === false. Actual: ' + (encodeURI.propertyIsEnumerable('length')));
}

//CHECK#2
result = true;
for (p in encodeURI){
  if (p === "length") {
    result = false;
  }  
}

if (result !== true) {
  $ERROR('#2: result = true; for (p in encodeURI) { if (p === "length") result = false; }  result === true;');
}

 }
});

