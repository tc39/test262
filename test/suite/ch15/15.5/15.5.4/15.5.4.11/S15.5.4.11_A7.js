// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * String.prototype.replace can't be used as constructor
 *
 * @path 15_Native/15.5_String_Objects/15.5.4_Properties_of_the_String_Prototype_Object/15.5.4.11_String.prototype.replace/S15.5.4.11_A7.js
 * @description Checking if creating the String.prototype.replace object fails
 */

var __FACTORY = String.prototype.replace;

try {
  var __instance = new __FACTORY;
  $FAIL('#1: __FACTORY = String.prototype.replace; "__instance = new __FACTORY" lead to throwing exception');
} catch (e) {}

