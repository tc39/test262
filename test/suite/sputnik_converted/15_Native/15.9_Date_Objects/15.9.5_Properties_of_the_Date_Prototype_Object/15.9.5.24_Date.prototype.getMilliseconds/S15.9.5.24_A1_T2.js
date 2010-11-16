// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.9.5.24_A1_T2;
 * @section: 15.9.5.24;
 * @assertion: The Date.prototype property "getMilliseconds" has { DontEnum } attributes;
 * @description: Checking absence of DontDelete attribute;
 */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.9.5.24_A1_T2",

path: "15.9.5.24",

description: "Checking absence of DontDelete attribute",

test: function testcase() {
   if (delete Date.prototype.getMilliseconds  === false) {
  $ERROR('#1: The Date.prototype.getMilliseconds property has not the attributes DontDelete');
}

if (Date.prototype.hasOwnProperty('getMilliseconds')) {
  $FAIL('#2: The Date.prototype.getMilliseconds property has not the attributes DontDelete');
}


 }
});

