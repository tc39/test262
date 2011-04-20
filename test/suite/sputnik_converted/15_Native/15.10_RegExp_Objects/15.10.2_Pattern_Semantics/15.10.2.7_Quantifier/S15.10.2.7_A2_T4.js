// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.10.2.7_A2_T4;
* @section: 15.10.2.7;
* @assertion: i) The production QuantifierPrefix :: { DecimalDigits } evaluates... 
* ii) The production QuantifierPrefix :: ? evaluates by returning the two results 0 and 1;
* @description: Execute /b{8}c/.test("aaabbbbcccddeeeefffff") and check results;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.10.2.7_A2_T4",

path: "15_Native\15.10_RegExp_Objects\15.10.2_Pattern_Semantics\15.10.2.7_Quantifier\S15.10.2.7_A2_T4.js",

assertion: "i) The production QuantifierPrefix :: { DecimalDigits } evaluates...",

description: "Execute /b{8}c/.test(\"aaabbbbcccddeeeefffff\") and check results",

test: function testcase() {
   __executed = /b{8}/.test("aaabbbbcccddeeeefffff");

//CHECK#1
if (__executed) {
	$ERROR('#1: /b{8}/.test("aaabbbbcccddeeeefffff") === false');
}


 }
});

