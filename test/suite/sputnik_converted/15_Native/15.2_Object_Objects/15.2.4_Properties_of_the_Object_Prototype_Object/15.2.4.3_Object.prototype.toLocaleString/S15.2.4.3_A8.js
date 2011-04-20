// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.2.4.3_A8;
* @section: 15.2.4.3;
* @assertion: The Object.prototype.toLocaleString.length property has the attribute DontEnum;
* @description: Checking if enumerating the Object.prototype.toLocaleString.length property fails;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.2.4.3_A8",

path: "15_Native\15.2_Object_Objects\15.2.4_Properties_of_the_Object_Prototype_Object\15.2.4.3_Object.prototype.toLocaleString\S15.2.4.3_A8.js",

assertion: "The Object.prototype.toLocaleString.length property has the attribute DontEnum",

description: "Checking if enumerating the Object.prototype.toLocaleString.length property fails",

test: function testcase() {
   //CHECK#0
if (!(Object.prototype.toLocaleString.hasOwnProperty('length'))) {
  $FAIL('#0: the Object.prototype.toLocaleString has length property.');
}


// CHECK#1
if (Object.prototype.toLocaleString.propertyIsEnumerable('length')) {
  $ERROR('#1: the Object.prototype.toLocaleString.length property has the attributes DontEnum');
}

// CHECK#2
for (p in Object.prototype.toLocaleString){
  if (p==="length")
        $ERROR('#2: the Object.prototype.toLocaleString.length property has the attributes DontEnum');
}
//

 }
});

