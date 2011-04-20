// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.10.4.1_A9_T3;
* @section: 15.10.4.1;
* @assertion: If P's characters do not have the form Pattern, then throw a SyntaxError exception;
* @description: Pattern is "[a--z]";
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.10.4.1_A9_T3",

path: "15_Native\15.10_RegExp_Objects\15.10.4_The_RegExp_Constructor\S15.10.4.1_A9_T3.js",

assertion: "If P\'s characters do not have the form Pattern, then throw a SyntaxError exception",

description: "Pattern is \"[a--z]\"",

test: function testcase() {
   //CHECK#1
try {
	$ERROR('#1.1: new RegExp("[a--z]") throw SyntaxError. Actual: ' + (new RegExp("[a--z]")));
} catch (e) {
	if ((e instanceof SyntaxError) !== true) {
		$ERROR('#1.2: new RegExp("[a--z]") throw SyntaxError. Actual: ' + (e));
	}
}


 }
});

