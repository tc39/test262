// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.9.5.6_A1_T2;
 * @section: 15.9.5.6;
 * @assertion: The Date.prototype property "toLocaleDateString" has { DontEnum } attributes;
 * @description: Checking absence of DontDelete attribute;
 */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.9.5.6_A1_T2",

path: "15_Native\15.9_Date_Objects\15.9.5_Properties_of_the_Date_Prototype_Object\15.9.5.6_Date.prototype.toLocaleDateString\S15.9.5.6_A1_T2.js",

assertion: "The Date.prototype property \"toLocaleDateString\" has { DontEnum } attributes",

description: "Checking absence of DontDelete attribute",

test: function testcase() {
   if (delete Date.prototype.toLocaleDateString  === false) {
  $ERROR('#1: The Date.prototype.toLocaleDateString property has not the attributes DontDelete');
}

if (Date.prototype.hasOwnProperty('toLocaleDateString')) {
  $FAIL('#2: The Date.prototype.toLocaleDateString property has not the attributes DontDelete');
}


 }
});

