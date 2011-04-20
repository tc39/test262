// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.6_A1_T10;
* @section: 15.5.4.6;
* @assertion: String.prototype.concat([,[...]]);
* @description: Call concat([,[...]]) function with object arguments;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.4.6_A1_T10",

path: "15_Native\15.5_String_Objects\15.5.4_Properties_of_the_String_Prototype_Object\15.5.4.6_String.prototype.concat\S15.5.4.6_A1_T10.js",

assertion: "String.prototype.concat([,[...]])",

description: "Call concat([,[...]]) function with object arguments",

test: function testcase() {
   var __obj = {toString:function(){return "\u0041";}}
var __obj2 = {toString:function(){return true;}}
var __obj3 = {toString:function(){return 42;}}
var __str = "lego";

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
with(__str){
    if (concat(__obj, __obj2, __obj3, x) !== "legoAtrue42undefined") {
      $ERROR('#1: var x; var __obj = {toString:function(){return "\u0041";}}; var __obj2 = {toString:function(){return true;}}; var __obj3 = {toString:function(){return 42;}}; var __str = "lego"; concat(__obj, __obj2, __obj3, x) === "legoAtrue42undefined". Actual: '+concat(__obj, __obj2, __obj3, x) ); 
    }
}
//
//////////////////////////////////////////////////////////////////////////////

var x;

 }
});

