// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The RegExp.prototype multiline property does not have a set accessor
 *
 * @path ch15/15.10/15.10.7/15.10.7.4/S15.10.7.4_A10.js
 * @description Checking if varying the multiline property fails
 */

__re = RegExp.prototype;

//CHECK#1
if (__re.hasOwnProperty('multiline') !== true) {
  $FAIL('#1: __re = RegExp.prototype; __re.hasOwnProperty(\'multiline\') === true');
}

__sample = /\n/;
__obj = __sample.multiline;

__sample.multiline = "shifted";

//CHECK#2
if (__sample.multiline !== __obj) {
  $ERROR('#2: __sample = /\n/; __obj = __sample.multiline; __sample.multiline = "shifted"; __sample.multiline === __obj. Actual: ' + (__sample.multiline));
}


