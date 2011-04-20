// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.10.6.4_A8;
* @section: 15.10.6.4;
* @assertion: The RegExp.prototype.toString.length property has the attribute DontEnum;
* @description: Checking if enumerating the RegExp.prototype.toString.length property fails;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.10.6.4_A8",

path: "15_Native\15.10_RegExp_Objects\15.10.6_Properties_of_the_RegExp_Prototype_Object\15.10.6.4_RegExp.prototype.toString\S15.10.6.4_A8.js",

assertion: "The RegExp.prototype.toString.length property has the attribute DontEnum",

description: "Checking if enumerating the RegExp.prototype.toString.length property fails",

test: function testcase() {
   //CHECK#0
if (RegExp.prototype.toString.hasOwnProperty('length') !== true) {
	$ERROR('#0: RegExp.prototype.toString.hasOwnProperty(\'length\') === true');
}

 //CHECK#1
if (RegExp.prototype.toString.propertyIsEnumerable('length') !== false) {
	$ERROR('#1: RegExp.prototype.toString.propertyIsEnumerable(\'length\') === true');
}

 //CHECK#2
count=0;

for (p in RegExp.prototype.toString){
	if (p==="length") count++;
}

if (count !== 0) {
	$ERROR('#2: count = 0; for (p in RegExp.prototype.toString){ if (p==="length") count++; } count === 0. Actual: ' + (count));
}


 }
});

