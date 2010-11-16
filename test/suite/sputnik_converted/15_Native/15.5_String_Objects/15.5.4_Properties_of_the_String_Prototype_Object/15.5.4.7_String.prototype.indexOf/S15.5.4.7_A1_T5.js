// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.7_A1_T5;
* @section: 15.5.4.7;
* @assertion: String.prototype.indexOf(searchString, position);
* @description: Call indexOf(searchString, position) function with null argument of function object;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.4.7_A1_T5",

path: "15.5.4.7",

description: "Call indexOf(searchString, position) function with null argument of function object",

test: function testcase() {
   //////////////////////////////////////////////////////////////////////////////
//CHECK#1
//since ToString(null) evaluates to "null" indexOf(null) evaluates to indexOf("",0)
if (function(){return "gnulluna"}().indexOf(null) !== 1) {
  $ERROR('#1: function(){return "gnulluna"}().indexOf(null) === 1. Actual: '+function(){return "gnulluna"}().indexOf(null) ); 
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

