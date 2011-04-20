// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.3.3.1_A2;
* @section: 15.3.3.1, 15.3.4;
* @assertion: The Function.prototype property has the attribute DontEnum;
* @description: Checking if enumerating the Function.prototype property fails;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.3.3.1_A2",

path: "15_Native\15.3_Function_Objects\15.3.3_Properties_of_the_Function_Constructor\15.3.3.1_Function.prototype\S15.3.3.1_A2.js",

assertion: "The Function.prototype property has the attribute DontEnum",

description: "Checking if enumerating the Function.prototype property fails",

test: function testcase() {
   // CHECK#1
if (Function.propertyIsEnumerable('prototype')) {
  $ERROR('#1: the Function.prototype property has the attributes DontEnum');
}

// CHECK#2
var count=0;

for (p in Function){
  if (p==="prototype") count++;
}

if (count !== 0) {
  $ERROR('#2: the Function.prototype property has the attributes DontEnum');
}

 }
});

