// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.18_A1_T5;
* @section: 15.5.4.18;
* @assertion: String.prototype.toUpperCase();
* @description: Call toUpperCase() function of function call;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.4.18_A1_T5",

path: "15.5.4.18",

description: "Call toUpperCase() function of function call",

test: function testcase() {
   //////////////////////////////////////////////////////////////////////////////
//CHECK#1
//since ToString(null) evaluates to "null" match(null) evaluates to match("null")
if (function(){return "GnulLuNa"}().toUpperCase() !== "GNULLUNA") {
  $ERROR('#1: function(){return "GnulLuNa"}().toUpperCase() === "GNULLUNA". Actual: '+function(){return "GnulLuNa"}().toUpperCase() );
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

