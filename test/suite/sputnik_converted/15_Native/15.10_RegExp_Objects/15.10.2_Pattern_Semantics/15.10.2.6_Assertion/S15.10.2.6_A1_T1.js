// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.10.2.6_A1_T1;
* @section: 15.10.2.6;
* @assertion: The production Assertion :: $ evaluates by returning an internal AssertionTester closure that takes a State argument x and performs the ...;
* @description: Execute /s$/.test("pairs\nmakes\tdouble") and check results;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.10.2.6_A1_T1",

path: "15_Native\15.10_RegExp_Objects\15.10.2_Pattern_Semantics\15.10.2.6_Assertion\S15.10.2.6_A1_T1.js",

assertion: "The production Assertion :: $ evaluates by returning an internal AssertionTester closure that takes a State argument x and performs the ...",

description: "Execute /s$/.test(\"pairs\\nmakes\\tdouble\") and check results",

test: function testcase() {
   __executed = /s$/.test("pairs\nmakes\tdouble");

//CHECK#1
if (__executed) {
	$ERROR('#1: /s$/.test("pairs\\nmakes\\tdouble") === false');
}


 }
});

