// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * let P be ToString(pattern) and let F be ToString(flags)
 *
 * @section 15.10.4.1
 * @path 15_Native/15.10_RegExp_Objects/15.10.4_The_RegExp_Constructor/S15.10.4.1_A8_T12.js
 * @description Pattern is "\u0042" and flags is {toString:void 0, valueOf:function(){throw "invalof";} }
 */

//CHECK#1
try {
	$ERROR('#1.1: new RegExp("\\u0042", {toString:void 0, valueOf:function(){throw "invalof";}}) throw "invalof". Actual: ' + (new RegExp("\u0042", {toString:void 0, valueOf:function(){throw "invalof";}})));
} catch (e) {
	if (e !== "invalof" ) {
		$ERROR('#1.2: new RegExp("\\u0042", {toString:void 0, valueOf:function(){throw "invalof";}}) throw "invalof". Actual: ' + (e));
	}
}


