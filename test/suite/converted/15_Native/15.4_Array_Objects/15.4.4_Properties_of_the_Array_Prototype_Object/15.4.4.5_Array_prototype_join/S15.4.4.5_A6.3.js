// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The length property of join has the attribute ReadOnly
 *
 * @id: S15.4.4.5_A6.3;
 * @section: 15.4.4.5;
 * @description: Checking if varying the length property fails;
 * @strict_only;
 * @strict_mode_negative;
 */

//CHECK#1
var x = Array.prototype.join.length;
Array.prototype.join.length = Infinity;
if (Array.prototype.join.length !== x) {
  $ERROR('#1: x = Array.prototype.join.length; Array.prototype.join.length = Infinity; Array.prototype.join.length === x. Actual: ' + (Array.prototype.join.length));
}


