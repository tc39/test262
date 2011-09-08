// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Object.prototype.hasOwnProperty can't be used as a constructor
 *
 * @section: 15.2.4.5, 13.2;
 * @path: 15_Native/15.2_Object_Objects/15.2.4_Properties_of_the_Object_Prototype_Object/15.2.4.5_Object.prototype.hasOwnProperty/S15.2.4.5_A7.js;
 * @description: Checking if creating "new Object.prototype.hasOwnProperty" fails;
 */

var FACTORY = Object.prototype.hasOwnProperty;

try {
  instance = new FACTORY;
  $FAIL('#1: Object.prototype.hasOwnProperty can\'t be used as a constructor');
} catch (e) {
  $PRINT(e);

}

