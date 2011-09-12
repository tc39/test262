// Copyright 2011 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @section 15.2.4.7
 * @path 15_Native/15.2_Object_Objects/15.2.4_Properties_of_the_Object_Prototype_Object/15.2.4.7_Object.prototype.propertyIsEnumerable/S15.2.4.7_A12.js
 * @description Let O be the result of calling ToObject passing the this value as the argument.
 * @negative
 */

Object.prototype.propertyIsEnumerable.call(undefined, 'foo');

