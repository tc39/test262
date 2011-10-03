// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The form (?! Disjunction ) specifies a zero-width negative lookahead.
 * In order for it to succeed, the pattern inside Disjunction must fail to match at the current position.
 * The current position is not advanced before matching the sequel
 *
 * @path 15_Native/15.10_RegExp_Objects/15.10.2_Pattern_Semantics/15.10.2.8_Atom/S15.10.2.8_A2_T8.js
 * @description Execute /(\.(?!com|org)|\/)/.test("ah.com") and check results
 */

__executed = /(\.(?!com|org)|\/)/.test("ah.com");

//CHECK#1
if (__executed) {
	$ERROR('#1: /(\\.(?!com|org)|\\/)/.test("ah.com") === false');
}


