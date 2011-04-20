// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.12_A1_T10;
* @section: 15.5.4.12;
* @assertion: String.prototype.search (regexp);
* @description: Argument is object, and instance is string. 
* Object with overrided toString function;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.4.12_A1_T10",

path: "15_Native\15.5_String_Objects\15.5.4_Properties_of_the_String_Prototype_Object\15.5.4.12_String.prototype.search\S15.5.4.12_A1_T10.js",

assertion: "String.prototype.search (regexp)",

description: "Argument is object, and instance is string.",

test: function testcase() {
   var __obj = {toString:function(){return "\u0041B";}};
var __str = "ssABB\u0041BABAB";

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
with(__str){
  if (search(__obj) !==2) {
    $ERROR('#1: var __obj = {toString:function(){return "\u0041B";}}; var __str = "ssABB\u0041BABAB"; search(__obj) ===2. Actual: '+search(__obj) );
  }
}
//
//////////////////////////////////////////////////////////////////////////////

var x;

 }
});

