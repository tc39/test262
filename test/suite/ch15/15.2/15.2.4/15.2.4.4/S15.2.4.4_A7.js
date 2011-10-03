// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Object.prototype.valueOf can't be used as a constructor
 *
 * @path 15_Native/15.2_Object_Objects/15.2.4_Properties_of_the_Object_Prototype_Object/15.2.4.4_Object.prototype.valueOf/S15.2.4.4_A7.js
 * @description Checking if creating "new Object.prototype.valueOf" fails
 */

var FACTORY = Object.prototype.valueOf;

try {
  instance = new FACTORY;
  $FAIL('#1: Object.prototype.valueOf can\'t be used as a constructor');
} catch (e) {
  $PRINT(e);

}

