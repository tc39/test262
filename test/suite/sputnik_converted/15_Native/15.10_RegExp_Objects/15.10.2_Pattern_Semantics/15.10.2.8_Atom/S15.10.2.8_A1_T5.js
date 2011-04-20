// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.10.2.8_A1_T5;
* @section: 15.10.2.8;
* @assertion: The form (?= Disjunction ) specifies a zero-width positive lookahead. 
* In order for it to succeed, the pattern inside Disjunction must match at the current position, but the current position is not advanced before matching the sequel. 
* If Disjunction can match at the current position in several ways, only the first one is tried;
* @description: Execute /[Jj]ava([Ss]cript)?(?=\:)/.test("rhino is JavaScript engine") and check results;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.10.2.8_A1_T5",

path: "15_Native\15.10_RegExp_Objects\15.10.2_Pattern_Semantics\15.10.2.8_Atom\S15.10.2.8_A1_T5.js",

assertion: "The form (?= Disjunction ) specifies a zero-width positive lookahead.",

description: "Execute /[Jj]ava([Ss]cript)?(?=\\:)/.test(\"rhino is JavaScript engine\") and check results",

test: function testcase() {
   __executed = /[Jj]ava([Ss]cript)?(?=\:)/.test("rhino is JavaScript engine");

//CHECK#1
if (__executed) {
	$ERROR('#1: /[Jj]ava([Ss]cript)?(?=\\:)/.test("rhino is JavaScript engine") === false');
}


 }
});

