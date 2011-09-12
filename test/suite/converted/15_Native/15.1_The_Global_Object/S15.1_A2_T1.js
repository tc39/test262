// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The global object does not have a [[Call]] property
 *
 * @section 15.1
 * @path 15_Native/15.1_The_Global_Object/S15.1_A2_T1.js
 * @description It is not possible to invoke the global object as a function
 * @negative
 */

this();

