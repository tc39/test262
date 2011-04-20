// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.17_A1_T10;
* @section: 15.5.4.17;
* @assertion: String.prototype.toLocaleLowerCase();
* @description: Call toLocaleLowerCase() function of object with overrode toString function;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.4.17_A1_T10",

path: "15_Native\15.5_String_Objects\15.5.4_Properties_of_the_String_Prototype_Object\15.5.4.17_String.prototype.toLocaleLowerCase\S15.5.4.17_A1_T10.js",

assertion: "String.prototype.toLocaleLowerCase()",

description: "Call toLocaleLowerCase() function of object with overrode toString function",

test: function testcase() {
   var __obj = {toString:function(){return "\u0041B";}}
__obj.toLocaleLowerCase = String.prototype.toLocaleLowerCase;

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (__obj.toLocaleLowerCase() !=="ab") {
  $ERROR('#1: var __obj = {toString:function(){return "\u0041B";}}; __obj.toLocaleLowerCase = String.prototype.toLocaleLowerCase; __obj.toLocaleLowerCase() ==="ab". Actual: '+__obj.toLocaleLowerCase() );
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

