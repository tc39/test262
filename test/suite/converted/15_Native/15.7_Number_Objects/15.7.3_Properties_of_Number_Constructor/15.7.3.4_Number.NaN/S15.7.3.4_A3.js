// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Number.NaN is DontDelete
 *
 * @id: S15.7.3.4_A3;
 * @section: 15.7.3.4;
 * @description: Checking if deleting Number.NaN fails;
 * @strict_only;
 * @strict_mode_negative;
 */

// CHECK#1
if (delete Number.NaN !== false) {
  $ERROR('#1: delete Number.NaN === false');
}

