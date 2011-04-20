// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.9.5.24_A3_T3;
 * @section: 15.9.5.24;
 * @assertion: The Date.prototype.getMilliseconds property "length" has { ReadOnly, DontDelete, DontEnum } attributes;
 * @description: Checking DontEnum attribute;
 */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.9.5.24_A3_T3",

path: "15_Native\15.9_Date_Objects\15.9.5_Properties_of_the_Date_Prototype_Object\15.9.5.24_Date.prototype.getMilliseconds\S15.9.5.24_A3_T3.js",

assertion: "The Date.prototype.getMilliseconds property \"length\" has { ReadOnly, DontDelete, DontEnum } attributes",

description: "Checking DontEnum attribute",

test: function testcase() {
   if (Date.prototype.getMilliseconds.propertyIsEnumerable('length')) {
  $ERROR('#1: The Date.prototype.getMilliseconds.length property has the attribute DontEnum');
}

for(x in Date.prototype.getMilliseconds) {
  if(x === "length") {
    $ERROR('#2: The Date.prototype.getMilliseconds.length has the attribute DontEnum');
  }
}


 }
});

