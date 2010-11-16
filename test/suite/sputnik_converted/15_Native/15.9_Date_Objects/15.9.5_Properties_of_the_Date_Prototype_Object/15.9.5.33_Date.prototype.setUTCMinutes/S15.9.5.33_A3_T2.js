// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.9.5.33_A3_T2;
 * @section: 15.9.5.33;
 * @assertion: The Date.prototype.setUTCMinutes property "length" has { ReadOnly, DontDelete, DontEnum } attributes;
 * @description: Checking DontDelete attribute;
 */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.9.5.33_A3_T2",

path: "15.9.5.33",

description: "Checking DontDelete attribute",

test: function testcase() {
   if (delete Date.prototype.setUTCMinutes.length  !== false) {
  $ERROR('#1: The Date.prototype.setUTCMinutes.length property has the attributes DontDelete');
}

if (!Date.prototype.setUTCMinutes.hasOwnProperty('length')) {
  $FAIL('#2: The Date.prototype.setUTCMinutes.length property has the attributes DontDelete');
}


 }
});

