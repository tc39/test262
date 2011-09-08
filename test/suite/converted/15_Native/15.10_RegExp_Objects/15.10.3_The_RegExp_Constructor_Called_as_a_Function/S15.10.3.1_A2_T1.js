// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * If pattern is an object R whose [[Class]] property is "RegExp" and flags is defined, then
 * call the RegExp constructor (15.10.4.1), passing it the pattern and flags arguments and return the object constructed by that constructor
 *
 * @section: 15.10.3.1;
 * @path: 15_Native/15.10_RegExp_Objects/15.10.3_The_RegExp_Constructor_Called_as_a_Function/S15.10.3.1_A2_T1.js;
 * @description: Checking if using "1" as flags leads to throwing the correct exception;
 */

//CHECK#1
try {
	$ERROR('#1.1: RegExp(new RegExp("\\d"), "1")) throw TypeError. Actual: ' + (RegExp(new RegExp("\d"), "1")));
} catch (e) {
	if ((e instanceof TypeError) !== true) {
		$ERROR('#1.2: RegExp(new RegExp("\\d"), "1")) throw TypeError. Actual: ' + (e));
	}
}


