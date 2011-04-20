// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.8_A1_T3;
* @section: 15.5.4.8;
* @assertion: String.prototype.lastIndexOf(searchString, position);
* @description: Checking by using eval;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.4.8_A1_T3",

path: "15_Native\15.5_String_Objects\15.5.4_Properties_of_the_String_Prototype_Object\15.5.4.8_String.prototype.lastIndexOf\S15.5.4.8_A1_T3.js",

assertion: "String.prototype.lastIndexOf(searchString, position)",

description: "Checking by using eval",

test: function testcase() {
   var lastIndexOf = String.prototype.lastIndexOf;

var __obj__pos = {valueOf:function(){return 7;}};

if (typeof toString === "undefined"){
  var toString = Object.prototype.toString;
}

var __class__ = toString();

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (lastIndexOf(eval("\"[\""),__obj__pos)!= 0) {
  $ERROR('#1: lastIndexOf(eval("\\"[\\""),__obj__pos)== 0. Actual: '+lastIndexOf(eval("\"[\""),__obj__pos));
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

