// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Number.NEGATIVE_INFINITY is DontDelete
 *
 * @section 15.7.3.5
 * @path 15_Native/15.7_Number_Objects/15.7.3_Properties_of_Number_Constructor/15.7.3.5_Number.NEGATIVE_INFINITY/S15.7.3.5_A3.js
 * @description Checking if deleting Number.NEGATIVE_INFINITY fails
 * @strict_only
 * @negative
 */

// CHECK#1
if (delete Number.NEGATIVE_INFINITY !== false) {
  $ERROR('#1: delete Number.NEGATIVE_INFINITY === false');
}

