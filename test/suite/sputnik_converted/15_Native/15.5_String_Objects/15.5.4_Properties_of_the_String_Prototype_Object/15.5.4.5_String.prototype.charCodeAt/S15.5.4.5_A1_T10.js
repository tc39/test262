// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.5_A1_T10;
* @section: 15.5.4.5;
* @assertion: String.prototype.charCodeAt(pos);
* @description: Call charCodeAt() function with object argument;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.4.5_A1_T10",

path: "15_Native\15.5_String_Objects\15.5.4_Properties_of_the_String_Prototype_Object\15.5.4.5_String.prototype.charCodeAt\S15.5.4.5_A1_T10.js",

assertion: "String.prototype.charCodeAt(pos)",

description: "Call charCodeAt() function with object argument",

test: function testcase() {
   var __obj = {toString:function(){return 1;}}
var __str = "lego";

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
with(__str){
  if (charCodeAt(__obj) !== 0x65) {
    $ERROR('#1: var __obj = {toString:function(){return 1;}}; var __str = "lego"; charCodeAt(__obj) === 0x65. Actual: charCodeAt(__obj) ==='+charCodeAt(__obj) ); 
  }
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

