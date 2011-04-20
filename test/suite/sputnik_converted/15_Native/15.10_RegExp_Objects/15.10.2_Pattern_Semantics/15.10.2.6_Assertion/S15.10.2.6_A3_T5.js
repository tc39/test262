// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.10.2.6_A3_T5;
* @section: 15.10.2.6;
* @assertion: The production Assertion :: \b evaluates by returning an internal AssertionTester closure that takes a State argument x and performs the ...;
* @description: Execute /so\b/.test("pilot\nsoviet robot\topenoffice") and check results;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.10.2.6_A3_T5",

path: "15_Native\15.10_RegExp_Objects\15.10.2_Pattern_Semantics\15.10.2.6_Assertion\S15.10.2.6_A3_T5.js",

assertion: "The production Assertion :: \\b evaluates by returning an internal AssertionTester closure that takes a State argument x and performs the ...",

description: "Execute /so\\b/.test(\"pilot\\nsoviet robot\\topenoffice\") and check results",

test: function testcase() {
   __executed = /so\b/.test("pilot\nsoviet robot\topenoffice");

//CHECK#1
if (__executed) {
	$ERROR('#1: /so\\b/.test("pilot\\nsoviet robot\\topenoffice") === false');
}


 }
});

