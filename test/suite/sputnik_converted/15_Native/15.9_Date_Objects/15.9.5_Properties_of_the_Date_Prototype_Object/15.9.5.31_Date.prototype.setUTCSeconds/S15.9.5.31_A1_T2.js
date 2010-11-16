// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.9.5.31_A1_T2;
 * @section: 15.9.5.31;
 * @assertion: The Date.prototype property "setUTCSeconds" has { DontEnum } attributes;
 * @description: Checking absence of DontDelete attribute;
 */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.9.5.31_A1_T2",

path: "15.9.5.31",

description: "Checking absence of DontDelete attribute",

test: function testcase() {
   if (delete Date.prototype.setUTCSeconds  === false) {
  $ERROR('#1: The Date.prototype.setUTCSeconds property has not the attributes DontDelete');
}

if (Date.prototype.hasOwnProperty('setUTCSeconds')) {
  $FAIL('#2: The Date.prototype.setUTCSeconds property has not the attributes DontDelete');
}


 }
});

