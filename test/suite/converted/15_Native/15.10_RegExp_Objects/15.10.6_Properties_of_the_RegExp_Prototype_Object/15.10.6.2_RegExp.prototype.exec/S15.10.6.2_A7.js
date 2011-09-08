// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * RegExp.prototype.exec can't be used as constructor
 *
 * @section: 15.10.6.2, 13.2;
 * @path: 15_Native/15.10_RegExp_Objects/15.10.6_Properties_of_the_RegExp_Prototype_Object/15.10.6.2_RegExp.prototype.exec/S15.10.6.2_A7.js;
 * @description: Checking if creating the RegExp.prototype.exec object fails;
 */

__FACTORY = RegExp.prototype.exec;

try {
  __instance = new __FACTORY;
  $ERROR('#1.1: __FACTORY = RegExp.prototype.exec throw TypeError. Actual: ' + (__instance));
} catch (e) {
  if ((e instanceof TypeError) !== true) {
    $ERROR('#1.2: __FACTORY = RegExp.prototype.exec throw TypeError. Actual: ' + (e));
  }
}

