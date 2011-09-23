// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The initial value of Error.prototype.message is ""
 *
 * @path 15_Native/15.11_Error_Objects/15.11.4_Properties_of_the_Error_Prototype_Object/S15.11.4.3_A2.js
 * @description Checking value of Error.prototype.message
 */

//////////////////////////////////////////////////////////////////////////////
// CHECK#1
if (typeof Error.prototype.message !== "string") {
  $ERROR('#1: typeof Error.prototype.message === "string". Actual: ' + Error.prototype.message);
}
//
//////////////////////////////////////////////////////////////////////////////

