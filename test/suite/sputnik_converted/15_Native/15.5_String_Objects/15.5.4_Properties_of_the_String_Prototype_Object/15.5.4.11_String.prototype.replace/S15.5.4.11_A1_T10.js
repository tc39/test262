// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.11_A1_T10;
* @section: 15.5.4.11;
* @assertion: String.prototype.replace (searchValue, replaceValue);
* @description: Call replace (searchValue, replaceValue) function with object and function arguments of string. Object have overrided toString function;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.4.11_A1_T10",

path: "15_Native\15.5_String_Objects\15.5.4_Properties_of_the_String_Prototype_Object\15.5.4.11_String.prototype.replace\S15.5.4.11_A1_T10.js",

assertion: "String.prototype.replace (searchValue, replaceValue)",

description: "Call replace (searchValue, replaceValue) function with object and function arguments of string. Object have overrided toString function",

test: function testcase() {
   var __obj = {toString:function(){return "\u0041B";}};

var __str = "ABB\u0041BABAB";

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
with(__str){
    if (replace(__obj, function(){return x;}) !== "undefinedBABABAB") {
      $ERROR('#1: var x; var __obj = {toString:function(){return "\u0041B";}}; var __str = "ABB\u0041BABAB"; replace(__obj, function(){return x;}) === "undefinedBABABAB". Actual: '+replace(__obj, function(){return x;}) );
    }
}
//
//////////////////////////////////////////////////////////////////////////////

var x;

 }
});

