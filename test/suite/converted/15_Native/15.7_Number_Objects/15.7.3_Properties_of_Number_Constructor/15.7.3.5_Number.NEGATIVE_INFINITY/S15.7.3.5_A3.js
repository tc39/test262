// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Number.NEGATIVE_INFINITY is DontDelete
 *
 * @id: S15.7.3.5_A3;
 * @section: 15.7.3.5;
 * @description: Checking if deleting Number.NEGATIVE_INFINITY fails;
 * @strict_only;
 * @strict_mode_negative;
 */

// CHECK#1
if (delete Number.NEGATIVE_INFINITY !== false) {
  $ERROR('#1: delete Number.NEGATIVE_INFINITY === false');
}

