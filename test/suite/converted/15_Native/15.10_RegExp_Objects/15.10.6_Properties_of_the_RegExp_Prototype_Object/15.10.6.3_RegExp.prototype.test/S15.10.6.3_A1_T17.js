// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Equivalent to the expression RegExp.prototype.exec(string) != null
 *
 * @section: 15.10.6.3;
 * @path: 15_Native/15.10_RegExp_Objects/15.10.6_Properties_of_the_RegExp_Prototype_Object/15.10.6.3_RegExp.prototype.test/S15.10.6.3_A1_T17.js;
 * @description: RegExp is /ll|l/ and tested string is null;
 */

__re = /ll|l/;

//CHECK#0
if (__re.test(null) !== (__re.exec(null) !== null)) {
	$ERROR('#0: __re = /ll|l/; __re.test(null) === (__re.exec(null) !== null)');
}


