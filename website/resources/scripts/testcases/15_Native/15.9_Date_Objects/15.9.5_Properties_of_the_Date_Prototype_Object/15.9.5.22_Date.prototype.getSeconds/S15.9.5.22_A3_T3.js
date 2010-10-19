// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.9.5.22_A3_T3;
 * @section: 15.9.5.22;
 * @assertion: The Date.prototype.getSeconds property "length" has { ReadOnly, DontDelete, DontEnum } attributes;
 * @description: Checking DontEnum attribute;
 */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.9.5.22_A3_T3",

path: "15.9.5.22",

description: "Checking DontEnum attribute",

test: function testcase() {
   if (Date.prototype.getSeconds.propertyIsEnumerable('length')) {
  $ERROR('#1: The Date.prototype.getSeconds.length property has the attribute DontEnum');
}

for(x in Date.prototype.getSeconds) {
  if(x === "length") {
    $ERROR('#2: The Date.prototype.getSeconds.length has the attribute DontEnum');
  }
}


 }
});

