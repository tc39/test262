// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.10.5.1_A2;
* @section: 15.10.5.1;
* @assertion: The RegExp.prototype property has the attribute DontEnum;
* @description: Checking if enumerating the RegExp.prototype property fails;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.10.5.1_A2",

path: "15_Native\15.10_RegExp_Objects\15.10.5_Properties_of_the_RegExp_Constructor\S15.10.5.1_A2.js",

assertion: "The RegExp.prototype property has the attribute DontEnum",

description: "Checking if enumerating the RegExp.prototype property fails",

test: function testcase() {
   //CHECK#0
if (RegExp.hasOwnProperty('prototype') !== true) {
	$ERROR('#0: RegExp.hasOwnProperty(\'prototype\') === true');
}

 //CHECK#1
if (RegExp.propertyIsEnumerable('prototype') !== false) {
	$ERROR('#1: RegExp.propertyIsEnumerable(\'prototype\') === false');
}

 //CHECK#2
count=0;
for (p in RegExp){
	if (p==="prototype") count++;
}

if (count !== 0) {
	$ERROR('#2: count=0; for (p in RegExp){ if (p==="prototype") count++; } count === 0. Actual: ' + (count));
}


 }
});

