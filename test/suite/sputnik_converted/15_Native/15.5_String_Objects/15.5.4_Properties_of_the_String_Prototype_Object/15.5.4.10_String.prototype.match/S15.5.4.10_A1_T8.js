// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.10_A1_T8;
* @section: 15.5.4.10;
* @assertion: String.prototype.match (regexp);
* @description: Call match (regexp) function with void 0 argument of string object;
* 
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.4.10_A1_T8",

path: "15_Native\15.5_String_Objects\15.5.4_Properties_of_the_String_Prototype_Object\15.5.4.10_String.prototype.match\S15.5.4.10_A1_T8.js",

assertion: "String.prototype.match (regexp)",

description: "Call match (regexp) function with void 0 argument of string object",

test: function testcase() {
   var __obj = {toString:function(){}};

var __matched = String(__obj).match(void 0);

var __expected = RegExp(void 0).exec("undefined"); 

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (__matched.length !== __expected.length) {
  $ERROR('#1: __obj = {toString:function(){}}; __matched = String(__obj).match(void 0); __expected = RegExp(void 0).exec("undefined"); __matched.length === __expected.length. Actual: '+__matched.length );
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (__matched.index !== __expected.index) {
  $ERROR('#2: __obj = {toString:function(){}}; __matched = String(__obj).match(void 0); __expected = RegExp(void 0).exec("undefined"); __matched.index === __expected.index. Actual: '+__matched.index );
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#3
if (__matched.input !== __expected.input) {
  $ERROR('#3: __obj = {toString:function(){}}; __matched = String(__obj).match(void 0); __expected = RegExp(void 0).exec("undefined"); __matched.input === __expected.input. Actual: '+__matched.input );
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#4
for(var index=0; index<__expected.length; index++) {
  if (__matched[index]!==__expected[index]) {
    $ERROR('#4.'+index+': __obj = {toString:function(){}}; __matched = String(__obj).match(void 0); __expected = RegExp(void 0).exec("undefined"); __matched['+index+']===__expected['+index+']. Actual: '+__matched[index]);
  }
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

