// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.10.6.1_A1_T2;
* @section: 15.10.6.1;
* @assertion: The initial value of RegExp.prototype.constructor is the built-in RegExp constructor;
* @description: Compare instance.constructor !== RegExp, where instance is new RegExp.prototype.constructor;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.10.6.1_A1_T2",

path: "15_Native\15.10_RegExp_Objects\15.10.6_Properties_of_the_RegExp_Prototype_Object\S15.10.6.1_A1_T2.js",

assertion: "The initial value of RegExp.prototype.constructor is the built-in RegExp constructor",

description: "Compare instance.constructor !== RegExp, where instance is new RegExp.prototype.constructor",

test: function testcase() {
   __FACTORY = RegExp.prototype.constructor;

__instance = new __FACTORY;

//CHECK#1
if ((__instance instanceof RegExp) !== true) {
	$ERROR('#1: __FACTORY = RegExp.prototype.constructor; __instance = new __FACTORY; (__instance instanceof RegExp) === true');
}

//CHECK#2
if (__instance.constructor !== RegExp) {
	$ERROR('#2: __FACTORY = RegExp.prototype.constructor; __instance = new __FACTORY; __instance.constructor === RegExp. Actual: ' + (__instance.constructor));
}


 }
});

