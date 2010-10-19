// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.13_A1_T14;
* @section: 15.5.4.13;
* @assertion: String.prototype.slice (start, end);
* @description: Used one argument, that is function(){}(). Instance is string;
*/



// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.4.13_A1_T14",

path: "15.5.4.13",

description: "Used one argument, that is function(){}(). Instance is string",

test: function testcase() {
   //////////////////////////////////////////////////////////////////////////////
//CHECK#1
if ("report".slice(function(){}()) !== "report") {
  $ERROR('#1: "report".slice(function(){}()) === "report". Actual: '+"report".slice(function(){}()) );
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

