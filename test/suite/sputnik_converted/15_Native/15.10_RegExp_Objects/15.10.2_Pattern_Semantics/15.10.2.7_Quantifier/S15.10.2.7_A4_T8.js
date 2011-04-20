// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.10.2.7_A4_T8;
* @section: 15.10.2.7;
* @assertion: The production QuantifierPrefix :: * evaluates by returning the two results 0 and \infty;
* @description: Execute /["'][^"']*["']/.test('alice cries out: don\'t') and check results;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.10.2.7_A4_T8",

path: "15_Native\15.10_RegExp_Objects\15.10.2_Pattern_Semantics\15.10.2.7_Quantifier\S15.10.2.7_A4_T8.js",

assertion: "The production QuantifierPrefix :: * evaluates by returning the two results 0 and \\infty",

description: "Execute /[\"\'][^\"\']*[\"\']/.test(\'alice cries out: don\\\'t\') and check results",

test: function testcase() {
   __executed = /["'][^"']*["']/.test('alice cries out: don\'t');

//CHECK#1
if (__executed) {
	$ERROR('#1: /["\'][^"\']*["\']/.test(\'alice cries out: don\'t\') === false');
}


 }
});

