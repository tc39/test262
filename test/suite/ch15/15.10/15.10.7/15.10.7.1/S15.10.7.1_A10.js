// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The RegExp.prototype source property does not have a set accessor
 *
 * @path ch15/15.10/15.10.7/15.10.7.1/S15.10.7.1_A10.js
 * @description Checking if varying the source property fails
 */

__re = RegExp.prototype;

//CHECK#1
if (__re.hasOwnProperty('source') !== true) {
  $FAIL('#1: __re = RegExp.prototype; __re.hasOwnProperty(\'source\') === true');
}

__obj = __re.source;

__re.source = "shifted";

//CHECK#2
if (__re.source !== __obj) {
  $ERROR('#2: __re = RegExp.prototype; __obj = __re.source; __re.source = "shifted"; __re.source === __obj. Actual: ' + (__re.source));
}


