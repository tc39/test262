// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.9_A6;
* @section: 15.5.4.9, 13.2;
* @assertion: String.prototype.localeCompare has not prototype property;
* @description: Checking String.prototype.localeCompare.prototype;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.4.9_A6",

path: "15_Native\15.5_String_Objects\15.5.4_Properties_of_the_String_Prototype_Object\15.5.4.9_String.prototype.localeCompare\S15.5.4.9_A6.js",

assertion: "String.prototype.localeCompare has not prototype property",

description: "Checking String.prototype.localeCompare.prototype",

test: function testcase() {
   //////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (String.prototype.localeCompare.prototype !== undefined) {
  $ERROR('#1: String.prototype.localeCompare.prototype === undefined. Actual: '+String.prototype.localeCompare.prototype );
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

