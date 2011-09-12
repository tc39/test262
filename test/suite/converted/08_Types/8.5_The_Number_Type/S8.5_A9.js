// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Globally defined variable NaN has not been altered by program execution
 *
 * @section 8.5, 7.8.3
 * @path 08_Types/8.5_The_Number_Type/S8.5_A9.js
 * @description Try alter globally defined variable NaN
 * @strict_only
 * @strict_mode_negative
 */

Number.NaN = 1;

if (Number.NaN === 1) {
  $ERROR('#1: Globally defined variable NaN has not been altered by program execution');
}

