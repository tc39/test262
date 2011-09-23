// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * String.prototype.toLocaleLowerCase can't be used as constructor
 *
 * @path 15_Native/15.5_String_Objects/15.5.4_Properties_of_the_String_Prototype_Object/15.5.4.17_String.prototype.toLocaleLowerCase/S15.5.4.17_A7.js
 * @description Checking if creating the String.prototype.toLocaleLowerCase object fails
 */

var __FACTORY = String.prototype.toLocaleLowerCase;

try {
  var __instance = new __FACTORY;
  $FAIL('#1: var __FACTORY = String.prototype.toLocaleLowerCase; "__instance = new __FACTORY" lead to throwing exception');
} catch (e) {
  if ((e instanceof TypeError) !== true) {
    $ERROR('#1.1: var __FACTORY = String.prototype.toLocaleLowerCase; "var __instance = new __FACTORY" throw a TypeError. Actual: ' + (e));  
  }
  $PRINT(e);
}

