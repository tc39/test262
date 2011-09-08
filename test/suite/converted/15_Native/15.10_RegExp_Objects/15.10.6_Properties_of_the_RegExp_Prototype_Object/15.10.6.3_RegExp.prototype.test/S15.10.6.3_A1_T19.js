// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Equivalent to the expression RegExp.prototype.exec(string) != null
 *
 * @section: 15.10.6.3;
 * @path: 15_Native/15.10_RegExp_Objects/15.10.6_Properties_of_the_RegExp_Prototype_Object/15.10.6.3_RegExp.prototype.test/S15.10.6.3_A1_T19.js;
 * @description: RegExp is /e{1}/ and tested string is void 0;
 */

__re = /e{1}/;

//CHECK#0
if (__re.test(void 0) !== (__re.exec(void 0) !== null)) {
	$ERROR('#0: __re = /e{1}/; __re.test(void 0) === (__re.exec(void 0) !== null)');
}


