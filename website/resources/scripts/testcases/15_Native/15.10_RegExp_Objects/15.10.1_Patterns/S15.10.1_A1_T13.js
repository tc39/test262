// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.10.1_A1_T13;
* @section: 15.10.1;
* @assertion: RegExp syntax errors must be caught when matcher(s) compiles;
* @description: Tested RegExp is "x{1}{1,}";
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.10.1_A1_T13",

path: "15.10.1",

description: "Tested RegExp is \"x{1}{1,}\"",

test: function testcase() {
   //CHECK#1
try {
	$ERROR('#1.1: new RegExp("x{1}{1,}") throw SyntaxError. Actual: ' + (new RegExp("x{1}{1,}")));
} catch (e) {
	if ((e instanceof SyntaxError) !== true) {
		$ERROR('#1.2: new RegExp("x{1}{1,}") throw SyntaxError. Actual: ' + (e));
	}
}


 }
});

