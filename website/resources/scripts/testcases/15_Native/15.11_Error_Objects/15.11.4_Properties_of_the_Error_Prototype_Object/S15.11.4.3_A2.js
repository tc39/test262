// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.11.4.3_A2;
 * @section: 15.11.4.3, 16;
 * @assertion: The initial value of Error.prototype.message is "";
 * @description: Checking value of Error.prototype.message;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.11.4.3_A2",

path: "15.11.4.3, 16",

description: "Checking value of Error.prototype.message",

test: function testcase() {
   //////////////////////////////////////////////////////////////////////////////
// CHECK#1
if (typeof Error.prototype.message !== "string") {
  $ERROR('#1: typeof Error.prototype.message === "string". Actual: ' + Error.prototype.message);
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

