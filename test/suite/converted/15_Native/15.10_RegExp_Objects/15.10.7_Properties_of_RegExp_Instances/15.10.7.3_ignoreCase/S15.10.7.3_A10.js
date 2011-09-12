// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The RegExp instance ignoreCase property has the attribute ReadOnly
 *
 * @section 15.10.7.3
 * @path 15_Native/15.10_RegExp_Objects/15.10.7_Properties_of_RegExp_Instances/15.10.7.3_ignoreCase/S15.10.7.3_A10.js
 * @description Checking if varying the ignoreCase property fails
 */

__re = /a|b|c/;

//CHECK#1
if (__re.hasOwnProperty('ignoreCase') !== true) {
  $FAIL('#1: __re = /a|b|c/; __re.hasOwnProperty(\'ignoreCase\') === true');
}

__obj = __re.ignoreCase;

__re.ignoreCase = "shifted";

//CHECK#2
if (__re.ignoreCase !== __obj) {
  $ERROR('#2: __re = /a|b|c/; __obj = __re.ignoreCase; __re.ignoreCase = "shifted"; __re.ignoreCase === __obj. Actual: ' + (__re.ignoreCase));
}


