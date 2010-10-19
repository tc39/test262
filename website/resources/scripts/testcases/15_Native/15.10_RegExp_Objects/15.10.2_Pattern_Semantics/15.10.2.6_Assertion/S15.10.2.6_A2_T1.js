// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.10.2.6_A2_T1;
* @section: 15.10.2.6;
* @assertion: The production Assertion :: ^ evaluates by returning an internal AssertionTester closure that takes a State argument x and performs the ...;
* @description: Execute /^m/.test("pairs\nmakes\tdouble") and check results;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.10.2.6_A2_T1",

path: "15.10.2.6",

description: "Execute /^m/.test(\"pairs\\nmakes\\tdouble\") and check results",

test: function testcase() {
   __executed = /^m/.test("pairs\nmakes\tdouble");

//CHECK#1
if (__executed) {
	$ERROR('#1: /^m/.test("pairs\\nmakes\\tdouble") === false');
}


 }
});

