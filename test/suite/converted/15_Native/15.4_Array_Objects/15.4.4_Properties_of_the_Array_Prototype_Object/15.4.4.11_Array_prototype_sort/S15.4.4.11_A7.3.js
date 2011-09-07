// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The length property of sort has the attribute ReadOnly
 *
 * @id: S15.4.4.11_A7.3;
 * @section: 15.4.4.11;
 * @description: Checking if varying the length fails;
 * @strict_only;
 * @strict_mode_negative;
 */

//CHECK#1
var x = Array.prototype.sort.length;
Array.prototype.sort.length = Infinity;
if (Array.prototype.sort.length !== x) {
  $ERROR('#1: x = Array.prototype.sort.length; Array.prototype.sort.length = Infinity; Array.prototype.sort.length === x. Actual: ' + (Array.prototype.sort.length));
}


