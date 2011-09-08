// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Value Property LOG10E of the Math Object has the attribute DontEnum
 *
 * @section: 15.8.1.5;
 * @path: 15_Native/15.8_The_Math_Object/15.8.1_Value_Properties_of_the_Math_Object/15.8.1.5_LOG10E/S15.8.1.5_A2.js;
 * @description: Checking if Math.LOG10E property has the attribute DontEnum;
 */

// CHECK#1
for(x in Math) {
  if(x === "LOG10E") {
    $ERROR('#1: Value Property LOG10E of the Math Object hasn\'t attribute DontEnum: \'for(x in Math) {x==="LOG10E"}\'');
  }
}


