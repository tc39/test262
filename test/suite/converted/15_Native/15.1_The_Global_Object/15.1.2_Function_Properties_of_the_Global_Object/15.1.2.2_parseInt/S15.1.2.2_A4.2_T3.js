// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * If R < 2 or R > 36, then return NaN
 *
 * @section 15.1.2.2
 * @path 15_Native/15.1_The_Global_Object/15.1.2_Function_Properties_of_the_Global_Object/15.1.2.2_parseInt/S15.1.2.2_A4.2_T3.js
 * @description Complex test
 */

//CHECK#
var pow = 2;
for (var i = 1; i < 32; i++) {   
  if (pow > 36) {  
    var res = true;  
    if (isNaN(parseInt(1, pow)) !== true) {
      $ERROR('#1.' + i + ': If R < 2 or R > 36, then return NaN');
    }
    if (isNaN(parseInt(1, -pow)) !== true) {
      $ERROR('#2.' + i + ': If R < 2 or R > 36, then return NaN');
    }
  }
  pow = pow * 2;                        
}    

