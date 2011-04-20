// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.11_A5_T1;
* @section: 15.5.4.11;
* @assertion: Use replace with regexp as searchValue and use $ in replaceValue;
* @description: searchValue is  regexp /^(a+)\1*,\1+$/ and replaceValue is "$1";
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.4.11_A5_T1",

path: "15_Native\15.5_String_Objects\15.5.4_Properties_of_the_String_Prototype_Object\15.5.4.11_String.prototype.replace\S15.5.4.11_A5_T1.js",

assertion: "Use replace with regexp as searchValue and use $ in replaceValue",

description: "searchValue is  regexp /^(a+)\\1*,\\1+$/ and replaceValue is \"$1\"",

test: function testcase() {
   var __str = "aaaaaaaaaa,aaaaaaaaaaaaaaa";
var __pattern = /^(a+)\1*,\1+$/;
var __repl = "$1";

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (__str.replace(__pattern, __repl)!=='aaaaa') {
  $ERROR('#1: var __str = "aaaaaaaaaa,aaaaaaaaaaaaaaa"; var __pattern = /^(a+)\1*,\1+$/; var __repl = "$1"; __str.replace(__pattern, __repl)===\'aaaaa\'. Actual: '+__str.replace(__pattern, __repl));
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

