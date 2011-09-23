// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The length property of encodeURI is 1
 *
 * @path 15_Native/15.1_The_Global_Object/15.1.3_URI_Handling_Function_Properties/15.1.3.3_encodeURI/S15.1.3.3_A5.4.js
 * @description encodeURI.length === 1
 */

//CHECK#1
if (encodeURI.length !== 1) {
  $ERROR('#1: encodeURI.length === 1. Actual: ' + (encodeURI.length));
} 


