// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.19_A1_T3;
* @section: 15.5.4.19;
* @assertion: String.prototype.toLocaleUpperCase();
* @description: Checking by using eval;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.4.19_A1_T3",

path: "15.5.4.19",

description: "Checking by using eval",

test: function testcase() {
   //////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (eval("\"bj\"").toLocaleUpperCase() !== "BJ") {
  $ERROR('#1: eval("\\"bj\\"").toLocaleUpperCase() === "BJ". Actual: '+eval("\"bj\"").toLocaleUpperCase() );
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

