// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The length property of reverse has the attribute ReadOnly
 *
 * @id: S15.4.4.8_A5.3;
 * @section: 15.4.4.8;
 * @description: Checking if varying the length property fails;
 * @strict_only;
 * @strict_mode_negative;
 */

//CHECK#1
var x = Array.prototype.reverse.length;
Array.prototype.reverse.length = Infinity;
if (Array.prototype.reverse.length !== x) {
  $ERROR('#1: x = Array.prototype.reverse.length; Array.prototype.reverse.length = Infinity; Array.prototype.reverse.length === x. Actual: ' + (Array.prototype.reverse.length));
}


