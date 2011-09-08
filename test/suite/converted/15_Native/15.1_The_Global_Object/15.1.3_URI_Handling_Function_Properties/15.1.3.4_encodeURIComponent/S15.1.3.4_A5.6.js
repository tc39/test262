// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The encodeURIComponent property has not prototype property
 *
 * @section: 15.1.3.4;
 * @path: 15_Native/15.1_The_Global_Object/15.1.3_URI_Handling_Function_Properties/15.1.3.4_encodeURIComponent/S15.1.3.4_A5.6.js;
 * @description: Checking encodeURIComponent.prototype;
 */

//CHECK#1
if (encodeURIComponent.prototype !== undefined) {
  $ERROR('#1: encodeURIComponent.prototype === undefined. Actual: ' + (encodeURIComponent.prototype));
}

