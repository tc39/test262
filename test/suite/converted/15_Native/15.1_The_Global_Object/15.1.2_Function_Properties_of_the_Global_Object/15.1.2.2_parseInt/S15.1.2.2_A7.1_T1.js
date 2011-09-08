// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * If Z is empty, return NaN
 *
 * @section: 15.1.2.2;
 * @path: 15_Native/15.1_The_Global_Object/15.1.2_Function_Properties_of_the_Global_Object/15.1.2.2_parseInt/S15.1.2.2_A7.1_T1.js;
 * @description: Complex test. R in [2, 36];
 */

//CHECK#
for (var i = 2; i <= 36; i++) {
  if (isNaN(parseInt("$string", i)) !== true) {
    $ERROR('#' + i + ': parseInt("$string", i) === Not-a-Number. Actual: ' + (parseInt("$string", i)));
  }
}    

