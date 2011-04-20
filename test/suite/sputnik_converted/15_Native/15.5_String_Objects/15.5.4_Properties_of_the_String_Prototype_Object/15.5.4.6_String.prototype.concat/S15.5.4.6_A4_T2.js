// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.6_A4_T2;
* @section: 15.5.4.6;
* @assertion: when String.prototype.concat([,[...]]) is called first Call ToString, giving it the this value as its argument;
* @description: Override toString function onto function, that throw exception;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.4.6_A4_T2",

path: "15_Native\15.5_String_Objects\15.5.4_Properties_of_the_String_Prototype_Object\15.5.4.6_String.prototype.concat\S15.5.4.6_A4_T2.js",

assertion: "when String.prototype.concat([,[...]]) is called first Call ToString, giving it the this value as its argument",

description: "Override toString function onto function, that throw exception",

test: function testcase() {
   var __instance = {toString:function(){throw "intostring";}};
var __obj = {toString:function(){throw "infirstarg";}};

__instance.concat = String.prototype.concat;

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
try {
  String.prototype.concat.call(__instance,__obj, notexist);
  $FAIL('#1: "String.prototype.concat.call(__instance,__obj, notexist)" lead to throwing exception');
} catch (e) {
  if (e !== "intostring") {
    $ERROR('#1: e === "intostring". Actual: '+e ); 
  }
} 
//
//////////////////////////////////////////////////////////////////////////////

var notexist;




 }
});

