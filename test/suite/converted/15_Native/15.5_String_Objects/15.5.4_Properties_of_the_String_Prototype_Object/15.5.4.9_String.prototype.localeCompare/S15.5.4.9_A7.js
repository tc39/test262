// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * String.prototype.localeCompare can't be used as constructor
 *
 * @section 15.5.4.9, 13.2
 * @path 15_Native/15.5_String_Objects/15.5.4_Properties_of_the_String_Prototype_Object/15.5.4.9_String.prototype.localeCompare/S15.5.4.9_A7.js
 * @description Checking if creating the String.prototype.localeCompare object fails
 */

var __FACTORY = String.prototype.localeCompare;

try {
  var __instance = new __FACTORY;
  $FAIL('#1: __FACTORY = String.prototype.localeCompare; __instance = new __FACTORY lead to throwing exception');
} catch (e) {}

