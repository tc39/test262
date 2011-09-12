// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * RegExp.prototype.exec(string) Performs a regular expression match of ToString(string) against the regular expression and
 * returns an Array object containing the results of the match, or null if the string did not match
 *
 * @section 15.10.6.2
 * @path 15_Native/15.10_RegExp_Objects/15.10.6_Properties_of_the_RegExp_Prototype_Object/15.10.6.2_RegExp.prototype.exec/S15.10.6.2_A1_T16.js
 * @description RegExp is /undefined/ and call exec() without arguments
 */

__re = /undefined/.exec()[0];
if (__re !== "undefined") {
	$ERROR('#1: /undefined/.exec()[0] === "undefined". Actual: ' + (__re));
}


