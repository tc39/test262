// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.6_A1_T7;
* @section: 15.5.4.6;
* @assertion: String.prototype.concat([,[...]]);
* @description: Call concat([,[...]]) function with undefined argument of string object;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.4.6_A1_T7",

path: "15.5.4.6",

description: "Call concat([,[...]]) function with undefined argument of string object",

test: function testcase() {
   //////////////////////////////////////////////////////////////////////////////
//CHECK#1
//since ToString(undefined) evaluates to "undefined" concat(undefined) evaluates to concat("undefined")
if (String("lego").concat(undefined) !== "legoundefined") {
  $ERROR('#1: String("lego").concat(undefined) === "legoundefined". Actual: '+String("lego").concat(undefined) ); 
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

