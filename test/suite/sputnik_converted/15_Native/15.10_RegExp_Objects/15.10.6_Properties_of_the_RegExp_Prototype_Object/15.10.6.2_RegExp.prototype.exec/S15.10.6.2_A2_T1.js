// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.10.6.2_A2_T1;
* @section: 15.10.6.2;
* @assertion: A TypeError exception is thrown if the this value is not an object for which the value of the internal [[Class]] property is "RegExp";
* @description: The internal [[Class]] property is "Object";
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.10.6.2_A2_T1",

path: "15_Native\15.10_RegExp_Objects\15.10.6_Properties_of_the_RegExp_Prototype_Object\15.10.6.2_RegExp.prototype.exec\S15.10.6.2_A2_T1.js",

assertion: "A TypeError exception is thrown if the this value is not an object for which the value of the internal [[Class]] property is \"RegExp\"",

description: "The internal [[Class]] property is \"Object\"",

test: function testcase() {
   __instance = new Object;

__instance.exec = RegExp.prototype.exec;

//CHECK#1
try {
	$ERROR('#1.1: __instance = new Object; __instance.exec = RegExp.prototype.exec; __instance.exec("message to investigate"). Actual: ' + (__instance.exec("message to investigate")));
} catch (e) {
	if ((e instanceof TypeError) !== true) {
		$ERROR('#1.2: __instance = new Object; __instance.exec = RegExp.prototype.exec. Actual: ' + (e));
	}
}


 }
});

