// Copyright 2011 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The toString function is not generic; it throws a TypeError exception if its this value is not a Function object.
 *
 * @section 15.3.4.2
 * @path 15_Native/15.3_Function_Objects/15.3.4_Properties_of_the_Function_Prototype_Object/15.3.4.2_Function.prototype.toString/S15.3.4.2_A16.js
 * @description The String constructor, given an object, should invoke that object's toString method as a method, i.e., with its this value bound to that object.
 * @negative TypeError
 */

var obj = {toString: Function.prototype.toString};

String(obj);

