// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The Infinity is DontDelete
 *
 * @section 15.1.1.2, 11.4.1
 * @path 15_Native/15.1_The_Global_Object/15.1.1_Value_Properties_of_the_Global_Object/15.1.1.2_Infinity/S15.1.1.2_A3.1.js
 * @description Use delete
 * @strict_only
 * @strict_mode_negative
 */

// CHECK#1
if (delete Infinity !== false) {
	$ERROR('#1: delete Infinity === false. Actual: ' + (delete Infinity)); 
}

