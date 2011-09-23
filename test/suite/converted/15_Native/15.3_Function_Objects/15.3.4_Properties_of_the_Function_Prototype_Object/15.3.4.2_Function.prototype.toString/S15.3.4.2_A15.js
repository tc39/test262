// Copyright 2011 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The toString function is not generic; it throws a TypeError exception if its this value is not a Function object.
 *
 * @path 15_Native/15.3_Function_Objects/15.3.4_Properties_of_the_Function_Prototype_Object/15.3.4.2_Function.prototype.toString/S15.3.4.2_A15.js
 * @description Whether or not they are callable, RegExp objects are not Function objects, so toString should throw a TypeError.
 * @negative TypeError
 */

Function.prototype.toString.call(/x/);

