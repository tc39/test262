// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Number.MAX_VALUE is DontDelete
 *
 * @path 15_Native/15.7_Number_Objects/15.7.3_Properties_of_Number_Constructor/15.7.3.2_Number.MAX_VALUE/S15.7.3.2_A3.js
 * @description Checking if deleting Number.MAX_VALUE fails
 * @onlyStrict
 * @negative
 */

// CHECK#1
if (delete Number.MAX_VALUE !== false) {
  $ERROR('#1: delete Number.MAX_VALUE === false');
}

