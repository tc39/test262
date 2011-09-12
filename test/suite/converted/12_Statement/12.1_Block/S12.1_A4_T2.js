// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The production Block can't be inside of expression
 *
 * @section 12.1
 * @path 12_Statement/12.1_Block/S12.1_A4_T2.js
 * @description Checking if execution of "y={x}" fails
 * @negative
 */

x=1;

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
y={x};
//
//////////////////////////////////////////////////////////////////////////////

