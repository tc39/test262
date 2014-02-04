// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Check ToLength(length) for non Array objects
 *
 * @path ch15/15.4/15.4.4/15.4.4.10/S15.4.4.10_A3_T1.js
 * @description length = 4294967296
 */

var obj = {};
obj.slice = Array.prototype.slice;
obj[0] = "x";
obj[4294967295] = "y";
obj.length = 4294967296;

try {
  var arr = obj.slice(0,4294967296);
  $FAIL('#1: var obj = {}; obj.slice = Array.prototype.slice; obj[0] = "x"; obj[4294967295] = "y"; obj.length = 4294967296; var arr = obj.slice(0,4294967296); lead to throwing exception. Actual: '+arr);
} catch (e) {
  if (!(e instanceof RangeError)) {
    $ERROR('#1.1: var obj = {}; obj.slice = Array.prototype.slice; obj[0] = "x"; obj[4294967295] = "y"; obj.length = 4294967296; var arr = obj.slice(0,4294967296); lead to throwing exception. Exception is instance of RangeError. Actual: exception is '+e);
  }
}

