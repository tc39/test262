// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.10_A1_T3;
* @section: 15.5.4.10;
* @assertion: String.prototype.match (regexp);
* @description: Checking by using eval;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.4.10_A1_T3",

path: "15_Native\15.5_String_Objects\15.5.4_Properties_of_the_String_Prototype_Object\15.5.4.10_String.prototype.match\S15.5.4.10_A1_T3.js",

assertion: "String.prototype.match (regexp)",

description: "Checking by using eval",

test: function testcase() {
   var match = String.prototype.match;

if (typeof toString === "undefined"){
    toString = Object.prototype.toString;
}

var __class__ = toString();

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (match(eval("\"bj\""))[0] !== "bj") {
  $ERROR('#1: match = String.prototype.match; match(eval("\\"bj\\""))[0] === "bj". Actual: '+match(eval("\"bj\""))[0] );
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

