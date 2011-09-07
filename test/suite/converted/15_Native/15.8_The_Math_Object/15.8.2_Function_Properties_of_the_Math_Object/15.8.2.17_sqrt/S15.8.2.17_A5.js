// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * If x is equal to +Infinity, Math.sqrt(x) is +Infinity
 *
 * @id: S15.8.2.17_A5;
 * @section: 15.8.2.17;
 * @description: Checking if Math.sqrt(+Infinity) is +Infinity;
 */

// CHECK#1
var x = +Infinity;
if (Math.sqrt(x) !== +Infinity)
{
	$ERROR("#1: 'var x=+Infinity; Math.sqrt(x) !== +Infinity'");
}

