// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The undefined is DontDelete
 *
 * @id: S15.1.1.3_A3.1;
 * @section: 15.1.1.3, 11.4.1;
 * @description: Use delete;
 * @strict_only;
 * @strict_mode_negative;
 */

// CHECK#1
if (delete undefined !== false) {
	$ERROR('#1: delete undefined === false. Actual: ' + (delete undefined)); 
}

