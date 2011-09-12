// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Operator x << y returns ToNumber(x) << ToNumber(y)
 *
 * @section 11.7.1
 * @path 11_Expressions/11.7_Bitwise_Shift_Operators/11.7.1_The_Left_shift_Operator/S11.7.1_A3_T1.5.js
 * @description Type(x) and Type(y) vary between Object object and Function object
 */

//CHECK#1
if (({} << function(){return 1}) !== 0) {
  $ERROR('#1: ({} << function(){return 1}) === 0. Actual: ' + (({} << function(){return 1})));
}

//CHECK#2
if ((function(){return 1} << {}) !== 0) {
  $ERROR('#2: (function(){return 1} << {}) === 0. Actual: ' + ((function(){return 1} << {})));
}

//CHECK#3
if ((function(){return 1} << function(){return 1}) !== 0) {
  $ERROR('#3: (function(){return 1} << function(){return 1}) === 0. Actual: ' + ((function(){return 1} << function(){return 1})));
}

//CHECK#4
if (({} << {}) !== 0) {
  $ERROR('#4: ({} << {}) === 0. Actual: ' + (({} << {})));
}


