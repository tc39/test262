// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.9.5.34_A1_T2;
 * @section: 15.9.5.34;
 * @assertion: The Date.prototype property "setHours" has { DontEnum } attributes;
 * @description: Checking absence of DontDelete attribute;
 */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.9.5.34_A1_T2",

path: "15.9.5.34",

description: "Checking absence of DontDelete attribute",

test: function testcase() {
   if (delete Date.prototype.setHours  === false) {
  $ERROR('#1: The Date.prototype.setHours property has not the attributes DontDelete');
}

if (Date.prototype.hasOwnProperty('setHours')) {
  $FAIL('#2: The Date.prototype.setHours property has not the attributes DontDelete');
}


 }
});

