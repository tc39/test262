// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * String.prototype.concat can't be used as constructor
 *
 * @path 15_Native/15.5_String_Objects/15.5.4_Properties_of_the_String_Prototype_Object/15.5.4.6_String.prototype.concat/S15.5.4.6_A7.js
 * @description Checking if creating the String.prototype.concat object fails
 */

var __FACTORY = String.prototype.concat;

try {
  var __instance = new __FACTORY;
  $FAIL('#1: __FACTORY = String.prototype.concat; "__instance = new __FACTORY" lead throwing exception');
} catch (e) {}

