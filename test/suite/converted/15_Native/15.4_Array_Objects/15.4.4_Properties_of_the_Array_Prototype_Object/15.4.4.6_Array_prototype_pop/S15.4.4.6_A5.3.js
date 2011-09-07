// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The length property of pop has the attribute ReadOnly
 *
 * @id: S15.4.4.6_A5.3;
 * @section: 15.4.4.6;
 * @description: Checking if varying the length property fails;
 * @strict_only;
 * @strict_mode_negative;
 */

//CHECK#1
var x = Array.prototype.pop.length;
Array.prototype.pop.length = Infinity;
if (Array.prototype.pop.length !== x) {
  $ERROR('#1: x = Array.prototype.pop.length; Array.prototype.pop.length = Infinity; Array.prototype.pop.length === x. Actual: ' + (Array.prototype.pop.length));
}


