// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.8_A4_T4;
* @section: 15.5.4.8;
* @assertion: when String.prototype.lastIndexOf(searchString, position) is called first Call ToString, giving it the this value as its argument. 
* Then Call ToString(searchString) and Call ToNumber(position);
* @description: Override toString and valueOf functions, and they throw exceptions;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.4.8_A4_T4",

path: "15_Native\15.5_String_Objects\15.5.4_Properties_of_the_String_Prototype_Object\15.5.4.8_String.prototype.lastIndexOf\S15.5.4.8_A4_T4.js",

assertion: "when String.prototype.lastIndexOf(searchString, position) is called first Call ToString, giving it the this value as its argument.",

description: "Override toString and valueOf functions, and they throw exceptions",

test: function testcase() {
   var __obj = {toString:function(){throw "intostr";}};
var __obj2 = {valueOf:function(){throw "intoint";}};
var __instance = new Number(10001.10001);
Number.prototype.lastIndexOf=String.prototype.lastIndexOf;

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
with(__instance){
    try {
      var x = lastIndexOf(__obj, __obj2);
      $FAIL('#1: var x = lastIndexOf(__obj, __obj2) lead to throwing exception');
    } catch (e) {
      if (e!=="intostr") {
        $ERROR('#1.1: Exception === "intostr". Actual: '+e);
      }
    }
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

