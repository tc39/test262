// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Result of ToString conversion from null value is "null"
 *
 * @id: S9.8_A2_T1;
 * @section: 9.8;
 * @description: null convert to String by explicit transformation;
 */

// CHECK#1
if (String(null) !== "null") {
  $ERROR('#1: String(null) === "null". Actual: ' + (String(null))); 
} 

