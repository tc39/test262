// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.10.3.1_A3_T1;
* @section: 15.10.3.1;
* @assertion: If pattern and flags are defined, then 
* call the RegExp constructor (15.10.4.1), passing it the pattern and flags arguments and return the object constructed by that constructor;
* @description: R is "d+" and instance is RegExp(R,"i");
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.10.3.1_A3_T1",

path: "15_Native\15.10_RegExp_Objects\15.10.3_The_RegExp_Constructor_Called_as_a_Function\S15.10.3.1_A3_T1.js",

assertion: "If pattern and flags are defined, then",

description: "R is \"d+\" and instance is RegExp(R,\"i\")",

test: function testcase() {
   __re = "d+";
__instance = RegExp(__re, "i");

//CHECK#1
if (__instance.constructor !== RegExp) {
	$ERROR('#1: __re = "d+"; __instance = RegExp(__re, "i"); __instance.constructor === RegExp. Actual: ' + (__instance.constructor));
}

//CHECK#2
if (__instance.source !== __re) {
	$ERROR('#2: __re = "d+"; __instance = RegExp(__re, "i"); __instance.source === __re. Actual: '+ (__instance.source));
}


 }
});

