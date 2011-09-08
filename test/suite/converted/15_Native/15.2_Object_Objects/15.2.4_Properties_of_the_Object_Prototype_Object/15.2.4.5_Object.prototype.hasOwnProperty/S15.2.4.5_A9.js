// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The Object.prototype.hasOwnProperty.length property has the attribute DontDelete
 *
 * @section: 15.2.4.5;
 * @path: 15_Native/15.2_Object_Objects/15.2.4_Properties_of_the_Object_Prototype_Object/15.2.4.5_Object.prototype.hasOwnProperty/S15.2.4.5_A9.js;
 * @description: Checking if deleting the Object.prototype.hasOwnProperty.length property fails;
 */

//CHECK#0
if (!(Object.prototype.hasOwnProperty.hasOwnProperty('length'))) {
  $FAIL('#0: the Object.prototype.hasOwnProperty has length property');
}

//CHECK#1
if (delete Object.prototype.hasOwnProperty.length) {
  $ERROR('#1: The Object.prototype.hasOwnProperty.length property has the attributes DontDelete');
}

//CHECK#2
if (!(Object.prototype.hasOwnProperty.hasOwnProperty('length'))) {
  $FAIL('#2: The Object.prototype.hasOwnProperty.length property has the attributes DontDelete');
}

