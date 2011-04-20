// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.10.2.13_A2_T6;
* @section: 15.10.2.13;
* @assertion: The production CharacterClass :: [ ^ ClassRanges ] evaluates by evaluating ClassRanges to  obtain a CharSet and returning that CharSet and the boolean true;
* @description: Execute /a[^b]c/.test("abc") and check results;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.10.2.13_A2_T6",

path: "15_Native\15.10_RegExp_Objects\15.10.2_Pattern_Semantics\15.10.2.13_CharacterClass\S15.10.2.13_A2_T6.js",

assertion: "The production CharacterClass :: [ ^ ClassRanges ] evaluates by evaluating ClassRanges to  obtain a CharSet and returning that CharSet and the boolean true",

description: "Execute /a[^b]c/.test(\"abc\") and check results",

test: function testcase() {
   __executed = /a[^b]c/.test("abc");

//CHECK#1
if (__executed) {
	$ERROR('#1: /a[^b]c/.test("abc") === false');
}


 }
});

