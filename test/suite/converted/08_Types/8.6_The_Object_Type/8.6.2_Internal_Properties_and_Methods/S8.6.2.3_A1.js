// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * If the property has the ReadOnly attribute, [[CanPut]](P) return false
 *
 * @path 08_Types/8.6_The_Object_Type/8.6.2_Internal_Properties_and_Methods/S8.6.2.3_A1.js
 * @description Try put other value for Math.E property
 * @noStrict
 */

var __e = Math.E;
Math.E = 1;
if (Math.E !== __e){
  $ERROR('#1: __e = Math.E; Math.E = 1; Math.E === __e. Actual: ' + (Math.E));
}

