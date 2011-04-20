// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.10.5.1_A1;
* @section: 15.10.5.1;
* @assertion: The RegExp has property prototype;
* @description: Checking RegExp.prototype property;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.10.5.1_A1",

path: "15_Native\15.10_RegExp_Objects\15.10.5_Properties_of_the_RegExp_Constructor\S15.10.5.1_A1.js",

assertion: "The RegExp has property prototype",

description: "Checking RegExp.prototype property",

test: function testcase() {
   //CHECK#1
if (RegExp.hasOwnProperty('prototype') !== true) {
	$ERROR('#1: RegExp.hasOwnProperty(\'prototype\') === true');
}


 }
});

