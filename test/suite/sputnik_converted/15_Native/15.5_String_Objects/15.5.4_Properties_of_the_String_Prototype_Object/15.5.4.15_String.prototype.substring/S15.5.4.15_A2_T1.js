// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.15_A2_T1;
* @section: 15.5.4.15;
* @assertion: String.prototype.substring (start, end) returns a string value(not object);
* @description: Checking type of substring();
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.4.15_A2_T1",

path: "15.5.4.15",

description: "Checking type of substring()",

test: function testcase() {
   var __string = new String("this is a string object");

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (typeof __string.substring() !== "string") {
  $ERROR('#1: __string = new String("this is a string object"); typeof __string.substring() === "string". Actual: '+typeof __string.substring() );
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

