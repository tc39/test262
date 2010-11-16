// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.2.4.5_A6;
* @section: 15.2.4.5, 13.2;
* @assertion: Object.prototype.hasOwnProperty has not prototype property;
* @description: Checking if obtaining the prototype property of Object.prototype.hasOwnProperty fails;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.2.4.5_A6",

path: "15.2.4.5, 13.2",

description: "Checking if obtaining the prototype property of Object.prototype.hasOwnProperty fails",

test: function testcase() {
   //CHECK#1
if (Object.prototype.hasOwnProperty.prototype !== undefined) {
  $ERROR('#1: Object.prototype.hasOwnProperty has not prototype property'+Object.prototype.hasOwnProperty.prototype);
}
//

 }
});

