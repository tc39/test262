// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The RegExp.prototype global property does not have the attribute DontDelete
 *
 * @path ch15/15.10/15.10.7/15.10.7.2/S15.10.7.2_A9.js
 * @description Checking if deleting the global property succeeds
 */

__re = RegExp.prototype;

//CHECK#0
if (__re.hasOwnProperty('global') !== true) {
  $FAIL('#0: __re = RegExp.prototype; __re.hasOwnProperty(\'global\') === true');
}

//CHECK#1
if ((delete __re.global) !== true) {
  $ERROR('#1: __re = RegExp.prototype; (delete __re.global) === true');
}

//CHECK#2
if (__re.hasOwnProperty('global') !== false) {
  $ERROR('#2: __re = RegExp.prototype;delete __re.global === true; __re.hasOwnProperty(\'global\') === false');
}


