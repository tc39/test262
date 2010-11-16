// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.11_A1_T5;
* @section: 15.5.4.11;
* @assertion: String.prototype.replace (searchValue, replaceValue);
* @description: Call replace (searchValue, replaceValue) function with null and Function() arguments of function object;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.4.11_A1_T5",

path: "15.5.4.11",

description: "Call replace (searchValue, replaceValue) function with null and Function() arguments of function object",

test: function testcase() {
   //////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (function(){return "gnulluna"}().replace(null, Function()) !== "gundefineduna") {
  $ERROR('#1: function(){return "gnulluna"}().replace(null, Function()) === "gundefineduna". Actual: '+function(){return "gnulluna"}().replace(null, Function()) );
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

