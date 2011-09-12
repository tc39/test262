// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The decodeURIComponent property has not prototype property
 *
 * @section 15.1.3.2
 * @path 15_Native/15.1_The_Global_Object/15.1.3_URI_Handling_Function_Properties/15.1.3.2_decodeURIComponent/S15.1.3.2_A5.6.js
 * @description Checking decodeURIComponent.prototype
 */

//CHECK#1
if (decodeURIComponent.prototype !== undefined) {
  $ERROR('#1: decodeURIComponent.prototype === undefined. Actual: ' + (decodeURIComponent.prototype));
}

