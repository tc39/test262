// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Equivalent to the expression RegExp.prototype.exec(string) != null
 *
 * @path 15_Native/15.10_RegExp_Objects/15.10.6_Properties_of_the_RegExp_Prototype_Object/15.10.6.3_RegExp.prototype.test/S15.10.6.3_A1_T21.js
 * @description RegExp is /[a-z]n/ and tested string is x, where x is function(){}()
 */

__re = /[a-z]n/;

//CHECK#0
if (__re.test(function(){}()) !== (__re.exec(function(){}()) !== null)) {
	$ERROR('#0: __re = /[a-z]n/; __re.test(function(){}()) === (__re.exec(function(){}()) !== null)');
}


