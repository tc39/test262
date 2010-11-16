// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.6_A1_T5;
* @section: 15.5.4.6;
* @assertion: String.prototype.concat([,[...]]);
* @description: Call concat([,[...]]) function with null argument of function object;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.4.6_A1_T5",

path: "15.5.4.6",

description: "Call concat([,[...]]) function with null argument of function object",

test: function testcase() {
   //////////////////////////////////////////////////////////////////////////////
//CHECK#1
//since ToString(null) evaluates to "null" concat(null) evaluates to concat("null")
if (function(){return "lego"}().concat(null) !== "legonull") {
  $ERROR('#1: function(){return "lego"}().concat(null) === "legonull". Actual: '+function(){return "lego"}().concat(null) ); 
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

