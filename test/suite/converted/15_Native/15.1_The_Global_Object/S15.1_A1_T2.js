// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The global object does not have a [[Construct]] property
 *
 * @section 15.1
 * @path 15_Native/15.1_The_Global_Object/S15.1_A1_T2.js
 * @description It is not possible to use the global object as a constructor
 * with the new operator
 * @negative
 */

new this();

