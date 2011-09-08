// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The production Assertion :: \b evaluates by returning an internal AssertionTester closure that takes a State argument x and performs the ...
 *
 * @section: 15.10.2.6;
 * @path: 15_Native/15.10_RegExp_Objects/15.10.2_Pattern_Semantics/15.10.2.6_Assertion/S15.10.2.6_A3_T5.js;
 * @description: Execute /so\b/.test("pilot\nsoviet robot\topenoffice") and check results;
 */

__executed = /so\b/.test("pilot\nsoviet robot\topenoffice");

//CHECK#1
if (__executed) {
	$ERROR('#1: /so\\b/.test("pilot\\nsoviet robot\\topenoffice") === false');
}


