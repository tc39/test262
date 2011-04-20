// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.12_A1_T13;
* @section: 15.5.4.12;
* @assertion: String.prototype.search (regexp);
* @description: Argument is object, and instance is string. 
* Object with overrided toString and valueOf functions;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.4.12_A1_T13",

path: "15_Native\15.5_String_Objects\15.5.4_Properties_of_the_String_Prototype_Object\15.5.4.12_String.prototype.search\S15.5.4.12_A1_T13.js",

assertion: "String.prototype.search (regexp)",

description: "Argument is object, and instance is string.",

test: function testcase() {
   var __obj = {toString:function(){return {};},valueOf:function(){return 1;}}

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if ("ABB\u0041B\u0031ABAB\u0031BBAA".search(__obj) !==5) {
  $ERROR('#1: var __obj = {toString:function(){return {};},valueOf:function(){return 1;}}; "ABB\\u0041B\\u0031ABAB\\u0031BBAA".search(__obj) ===5. Actual: '+("ABB\u0041B\u0031ABAB\u0031BBAA".search(__obj)) );
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

