// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Number.MIN_VALUE is DontDelete
 *
 * @path 15_Native/15.7_Number_Objects/15.7.3_Properties_of_Number_Constructor/15.7.3.3_Number.MIN_VALUE/S15.7.3.3_A3.js
 * @description Checking if deleting Number.MIN_VALUE fails
 * @onlyStrict
 * @negative
 */

//CHECK#1
if (delete Number.MIN_VALUE !== false) {
  $ERROR('#1: delete Number.MIN_VALUE === false');
}

