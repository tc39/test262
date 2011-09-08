// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Result of boolean conversion from boolean value is no conversion
 *
 * @section: 9.2, 11.4.9;
 * @path: 09_Type_Conversion/9.2_ToBoolean/S9.2_A3_T2.js;
 * @description: true and false convert to Boolean by implicit transformation;
 */

// CHECK#1 
if (!(true) !== false) {
  $ERROR('#1: !(true) === false. Actual: ' + (!(true)));	
}

// CHECK#2
if (!(false) !== true) {
  $ERROR('#2: !(false) === true. Actual: ' + (!(false)));
}

