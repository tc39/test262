// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.10.4.1_A5_T6;
* @section: 15.10.4.1;
* @assertion: If F contains any character other than 'g', 'i', or 'm', or if it contains the same one more than once, then throw a SyntaxError exception;
* @description: Checking if using "null" as F leads to throwing the correct exception;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.10.4.1_A5_T6",

path: "15.10.4.1",

description: "Checking if using \"null\" as F leads to throwing the correct exception",

test: function testcase() {
   //CHECK#1
try {
	$ERROR('#1.1: new RegExp(".",null) throw SyntaxError. Actual: ' + (new RegExp(".",null)));
} catch (e) {
	if ((e instanceof SyntaxError) !== true) {
		$ERROR('#1.2: new RegExp(".",null) throw SyntaxError. Actual: ' + (e));
	}
}


 }
});

