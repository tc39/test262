// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.17_A1_T5;
* @section: 15.5.4.17;
* @assertion: String.prototype.toLocaleLowerCase();
* @description: Call toLocaleLowerCase() function for function call;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.4.17_A1_T5",

path: "15.5.4.17",

description: "Call toLocaleLowerCase() function for function call",

test: function testcase() {
   //////////////////////////////////////////////////////////////////////////////
//CHECK#1
//since ToString(null) evaluates to "null" match(null) evaluates to match("null")
if (function(){return "GnulLuNa"}().toLocaleLowerCase() !== "gnulluna") {
  $ERROR('#1: function(){return "GnulLuNa"}().toLocaleLowerCase() === "gnulluna". Actual: '+function(){return "GnulLuNa"}().toLocaleLowerCase() );
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

