// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The encodeURI property has not prototype property
 *
 * @section 15.1.3.3
 * @path 15_Native/15.1_The_Global_Object/15.1.3_URI_Handling_Function_Properties/15.1.3.3_encodeURI/S15.1.3.3_A5.6.js
 * @description Checking encodeURI.prototype
 */

//CHECK#1
if (encodeURI.prototype !== undefined) {
  $ERROR('#1: encodeURI.prototype === undefined. Actual: ' + (encodeURI.prototype));
}

