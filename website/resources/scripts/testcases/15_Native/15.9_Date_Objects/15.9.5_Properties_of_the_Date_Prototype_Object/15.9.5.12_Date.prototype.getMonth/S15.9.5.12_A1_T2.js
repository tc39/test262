// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.9.5.12_A1_T2;
 * @section: 15.9.5.12;
 * @assertion: The Date.prototype property "getMonth" has { DontEnum } attributes;
 * @description: Checking absence of DontDelete attribute;
 */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.9.5.12_A1_T2",

path: "15.9.5.12",

description: "Checking absence of DontDelete attribute",

test: function testcase() {
   if (delete Date.prototype.getMonth  === false) {
  $ERROR('#1: The Date.prototype.getMonth property has not the attributes DontDelete');
}

if (Date.prototype.hasOwnProperty('getMonth')) {
  $FAIL('#2: The Date.prototype.getMonth property has not the attributes DontDelete');
}


 }
});

