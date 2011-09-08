// Copyright 2011 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Let O be the result of calling ToObject passing the this value as the argument.
 *
 * @section: 15.2.4.4;
 * @path: 15_Native/15.2_Object_Objects/15.2.4_Properties_of_the_Object_Prototype_Object/15.2.4.4_Object.prototype.valueOf/S15.2.4.4_A12.js;
 * @description: Checking Object.prototype.valueOf invoked by the 'call' property.;
 * @negative;
 */

Object.prototype.valueOf.call(undefined);

