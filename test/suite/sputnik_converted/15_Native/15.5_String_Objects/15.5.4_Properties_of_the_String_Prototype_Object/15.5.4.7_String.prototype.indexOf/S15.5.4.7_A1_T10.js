// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.7_A1_T10;
* @section: 15.5.4.7;
* @assertion: String.prototype.indexOf(searchString, position);
* @description: Call indexOf(searchString, position) function with object arguments;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.4.7_A1_T10",

path: "15_Native\15.5_String_Objects\15.5.4_Properties_of_the_String_Prototype_Object\15.5.4.7_String.prototype.indexOf\S15.5.4.7_A1_T10.js",

assertion: "String.prototype.indexOf(searchString, position)",

description: "Call indexOf(searchString, position) function with object arguments",

test: function testcase() {
   var __obj = {toString:function(){return "\u0041B";}}
var __obj2 = {valueOf:function(){return true;}}
var __str = "ABB\u0041BABAB";

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
with(__str){
    if (indexOf(__obj, __obj2) !== 3) {
      $ERROR('#1: var x; var __obj = {toString:function(){return "\u0041B";}}; var __obj2 = {valueOf:function(){return true;}}; var __str = "ABB\u0041BABAB"; indexOf(__obj, __obj2) === 3. Actual: '+indexOf(__obj, __obj2) ); 
    }
}
//
//////////////////////////////////////////////////////////////////////////////

var x;

 }
});

