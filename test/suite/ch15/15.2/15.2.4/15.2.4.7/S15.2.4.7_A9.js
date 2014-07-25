// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The Object.prototype.propertyIsEnumerable.length property does not have the attribute DontDelete
 *
 * @path ch15/15.2/15.2.4/15.2.4.7/S15.2.4.7_A9.js
 * @description Checking if deleting the Object.prototype.propertyIsEnumerable.length property fails
 */

//CHECK#0
if (!(Object.prototype.propertyIsEnumerable.hasOwnProperty('length'))) {
  $FAIL('#0: the Object.prototype.propertyIsEnumerable has length property');
}

//CHECK#1
if (!delete Object.prototype.propertyIsEnumerable.length) {
  $ERROR('#1: The Object.prototype.propertyIsEnumerable.length property does not have the attributes DontDelete');
}
//

