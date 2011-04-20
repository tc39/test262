// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.10.2.10_A1.4_T1;
* @section: 15.10.2.10;
* @assertion: The production CharacterEscape :: f evaluates by returning 
* the character \u000C;
* @description: Use \f in RegExp and \u000C in tested string;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.10.2.10_A1.4_T1",

path: "15_Native\15.10_RegExp_Objects\15.10.2_Pattern_Semantics\15.10.2.10_CharacterEscape\S15.10.2.10_A1.4_T1.js",

assertion: "The production CharacterEscape :: f evaluates by returning",

description: "Use \\f in RegExp and \\u000C in tested string",

test: function testcase() {
   //CHECK#1
var arr = /\f/.exec("\u000C");
if ((arr === null) || (arr[0] !== "\u000C")) {
  $ERROR('#1: var arr = /\\f/.exec("\\u000C"); arr[0] === "\\u000C". Actual. ' + (arr && arr[0]));
}

//CHECK#2
var arr = /\f\f/.exec("a\u000C\u000Cb");
if ((arr === null) || (arr[0] !== "\u000C\u000C")) {
  $ERROR('#2: var arr = /\\f\\f/.exec("a\\u000C\\u000Cb"); arr[0] === "\\u000C\\u000C". Actual. ' + (arr && arr[0]));
}    

 }
});

