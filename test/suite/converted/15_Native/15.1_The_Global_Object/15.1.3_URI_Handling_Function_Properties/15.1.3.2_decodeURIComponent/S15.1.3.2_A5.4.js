// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The length property of decodeURIComponent is 1
 *
 * @section: 15.1.3.2;
 * @path: 15_Native/15.1_The_Global_Object/15.1.3_URI_Handling_Function_Properties/15.1.3.2_decodeURIComponent/S15.1.3.2_A5.4.js;
 * @description: decodeURIComponent.length === 1;
 */

//CHECK#1
if (decodeURIComponent.length !== 1) {
  $ERROR('#1: decodeURIComponent.length === 1. Actual: ' + (decodeURIComponent.length));
} 


