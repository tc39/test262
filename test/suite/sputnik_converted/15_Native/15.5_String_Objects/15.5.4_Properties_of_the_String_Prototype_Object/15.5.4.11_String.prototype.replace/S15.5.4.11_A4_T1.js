// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.11_A4_T1;
* @section: 15.5.4.11;
* @assertion: replace with regexp /([a-z]+)([0-9]+)/ and replace function returns ;
* @description: searchValue is /([a-z]+)([0-9]+)/;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.4.11_A4_T1",

path: "15_Native\15.5_String_Objects\15.5.4_Properties_of_the_String_Prototype_Object\15.5.4.11_String.prototype.replace\S15.5.4.11_A4_T1.js",

assertion: "replace with regexp /([a-z]+)([0-9]+)/ and replace function returns",

description: "searchValue is /([a-z]+)([0-9]+)/",

test: function testcase() {
   var __str = "abc12 def34";
var __pattern = /([a-z]+)([0-9]+)/;

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (__str.replace(__pattern, __replFN)!=='12abc def34') {
  $ERROR('#1: var __str = "abc12 def34"; var __pattern = /([a-z]+)([0-9]+)/; function __replFN() {return arguments[2] + arguments[1];}; __str.replace(__pattern, __replFN)===\'12abc def34\'. Actual: '+__str.replace(__pattern, __replFN));
}
//
//////////////////////////////////////////////////////////////////////////////
    
function __replFN() {
    return arguments[2] + arguments[1];
}

 }
});

