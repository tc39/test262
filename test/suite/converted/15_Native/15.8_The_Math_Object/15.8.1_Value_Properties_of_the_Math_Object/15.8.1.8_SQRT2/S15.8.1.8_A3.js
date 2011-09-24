// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Value Property SQRT2 of the Math Object has the attribute DontDelete
 *
 * @path 15_Native/15.8_The_Math_Object/15.8.1_Value_Properties_of_the_Math_Object/15.8.1.8_SQRT2/S15.8.1.8_A3.js
 * @description Checking if Math.SQRT2 property has the attribute DontDelete
 * @onlyStrict
 * @negative
 */

// CHECK#1
if (delete Math.SQRT2 === true) {
    $ERROR('#1: Value Property SQRT2 of the Math Object hasn\'t attribute DontDelete: \'Math.SQRT2 === true\'');
}


