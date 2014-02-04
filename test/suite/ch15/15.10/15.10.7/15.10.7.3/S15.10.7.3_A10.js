// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The RegExp.prototype ignoreCase property does not have a set accessor
 *
 * @path ch15/15.10/15.10.7/15.10.7.3/S15.10.7.3_A10.js
 * @description Checking if varying the ignoreCase property fails
 */

__re = RegExp.prototype;

//CHECK#1
if (__re.hasOwnProperty('ignoreCase') !== true) {
  $FAIL('#1: __re = RegExp.prototype; __re.hasOwnProperty(\'ignoreCase\') === true');
}

__obj = __re.ignoreCase;

__re.ignoreCase = "shifted";

//CHECK#2
if (__re.ignoreCase !== __obj) {
  $ERROR('#2: __re = RegExp.prototype; __obj = __re.ignoreCase; __re.ignoreCase = "shifted"; __re.ignoreCase === __obj. Actual: ' + (__re.ignoreCase));
}


