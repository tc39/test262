// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.10_A1_T5;
* @section: 15.5.4.10;
* @assertion: String.prototype.match (regexp);
* @description: Call match (regexp) function with null argument of function object;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.4.10_A1_T5",

path: "15_Native\15.5_String_Objects\15.5.4_Properties_of_the_String_Prototype_Object\15.5.4.10_String.prototype.match\S15.5.4.10_A1_T5.js",

assertion: "String.prototype.match (regexp)",

description: "Call match (regexp) function with null argument of function object",

test: function testcase() {
   //////////////////////////////////////////////////////////////////////////////
//CHECK#1
//since ToString(null) evaluates to "null" match(null) evaluates to match("null")
if (function(){return "gnulluna"}().match(null)[0] !== "null") {
  $ERROR('#1: function(){return "gnulluna"}().match(null)[0] === "null". Actual: '+function(){return "gnulluna"}().match(null)[0] );
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

