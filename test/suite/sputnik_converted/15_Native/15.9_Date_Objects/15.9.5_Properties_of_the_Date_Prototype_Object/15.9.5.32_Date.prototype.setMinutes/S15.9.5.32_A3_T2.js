// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.9.5.32_A3_T2;
 * @section: 15.9.5.32;
 * @assertion: The Date.prototype.setMinutes property "length" has { ReadOnly, DontDelete, DontEnum } attributes;
 * @description: Checking DontDelete attribute;
 */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.9.5.32_A3_T2",

path: "15_Native\15.9_Date_Objects\15.9.5_Properties_of_the_Date_Prototype_Object\15.9.5.32_Date.prototype.setMinutes\S15.9.5.32_A3_T2.js",

assertion: "The Date.prototype.setMinutes property \"length\" has { ReadOnly, DontDelete, DontEnum } attributes",

description: "Checking DontDelete attribute",

test: function testcase() {
   if (delete Date.prototype.setMinutes.length  !== false) {
  $ERROR('#1: The Date.prototype.setMinutes.length property has the attributes DontDelete');
}

if (!Date.prototype.setMinutes.hasOwnProperty('length')) {
  $FAIL('#2: The Date.prototype.setMinutes.length property has the attributes DontDelete');
}


 }
});

