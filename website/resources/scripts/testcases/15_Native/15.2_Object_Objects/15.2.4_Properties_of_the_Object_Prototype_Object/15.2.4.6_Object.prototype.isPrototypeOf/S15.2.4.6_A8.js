// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.2.4.6_A8;
* @section: 15.2.4.6;
* @assertion: The Object.prototype.isPrototypeOf.length property has the attribute DontEnum;
* @description: Checknig if enumerating the Object.prototype.isPrototypeOf.length property fails;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.2.4.6_A8",

path: "15.2.4.6",

description: "Checknig if enumerating the Object.prototype.isPrototypeOf.length property fails",

test: function testcase() {
   //CHECK#0
if (!(Object.prototype.isPrototypeOf.hasOwnProperty('length'))) {
  $FAIL('#0: the Object.prototype.isPrototypeOf has length property');
}


// CHECK#1
if (Object.prototype.isPrototypeOf.propertyIsEnumerable('length')) {
  $ERROR('#1: the Object.prototype.isPrototypeOf.length property has the attributes DontEnum');
}

// CHECK#2
for (p in Object.prototype.isPrototypeOf){
  if (p==="length")
        $ERROR('#2: the Object.prototype.isPrototypeOf.length property has the attributes DontEnum');
}
//

 }
});

