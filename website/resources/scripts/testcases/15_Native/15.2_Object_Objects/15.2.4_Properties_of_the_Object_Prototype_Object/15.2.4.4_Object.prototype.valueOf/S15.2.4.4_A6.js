// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.2.4.4_A6;
* @section: 15.2.4.4, 13.2;
* @assertion: Object.prototype.valueOf has not prototype property;
* @description: Checking if obtaining the prototype property of Object.prototype.valueOf fails;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.2.4.4_A6",

path: "15.2.4.4, 13.2",

description: "Checking if obtaining the prototype property of Object.prototype.valueOf fails",

test: function testcase() {
   //CHECK#1
if (Object.prototype.valueOf.prototype !== undefined) {
  $ERROR('#1: Object.prototype.valueOf has not prototype property'+Object.prototype.valueOf.prototype);
}
//

 }
});

