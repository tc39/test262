// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.15_A1_T5;
* @section: 15.5.4.15;
* @assertion: String.prototype.substring (start, end);
* @description: Arguments are null and Function(), and instance is function object, that have overrided valueOf function;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.4.15_A1_T5",

path: "15_Native\15.5_String_Objects\15.5.4_Properties_of_the_String_Prototype_Object\15.5.4.15_String.prototype.substring\S15.5.4.15_A1_T5.js",

assertion: "String.prototype.substring (start, end)",

description: "Arguments are null and Function(), and instance is function object, that have overrided valueOf function",

test: function testcase() {
   __func.valueOf=function(){return "gnulluna"};

Function.prototype.substring=String.prototype.substring;


//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (__func.substring(null, Function()) !== "") {
  $ERROR('#1: __func.valueOf=function(){return "gnulluna"}; Function.prototype.substring=String.prototype.substring; function __func(){}; __func.substring(null, Function()) === "". Actual: '+__func.substring(null, Function()) );
}
//
//////////////////////////////////////////////////////////////////////////////

function __func(){};

 }
});

