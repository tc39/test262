// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The production QuantifierPrefix :: + evaluates by returning the two results 1 and \infty
 *
 * @path 15_Native/15.10_RegExp_Objects/15.10.2_Pattern_Semantics/15.10.2.7_Quantifier/S15.10.2.7_A3_T10.js
 * @description Execute /o+/.test("abcdefg") and check results
 */

__executed = /o+/.test("abcdefg");

//CHECK#1
if (__executed) {
	$ERROR('#1: /o+/.test("abcdefg") === false');
}


