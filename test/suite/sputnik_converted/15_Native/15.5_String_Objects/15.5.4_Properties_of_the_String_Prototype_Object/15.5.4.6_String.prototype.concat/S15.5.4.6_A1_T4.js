// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.6_A1_T4;
* @section: 15.5.4.6;
* @assertion: String.prototype.concat([,[...]]);
* @description: Call concat([,[...]]) function without argument of string object;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.4.6_A1_T4",

path: "15_Native\15.5_String_Objects\15.5.4_Properties_of_the_String_Prototype_Object\15.5.4.6_String.prototype.concat\S15.5.4.6_A1_T4.js",

assertion: "String.prototype.concat([,[...]])",

description: "Call concat([,[...]]) function without argument of string object",

test: function testcase() {
   //////////////////////////////////////////////////////////////////////////////
//CHECK#1
//since ToString() evaluates to "" concat() evaluates to concat("")
if ("lego".concat() !== "lego") {
  $ERROR('#1: "lego".concat() === "lego". Actual: '+("lego".concat()) ); 
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

