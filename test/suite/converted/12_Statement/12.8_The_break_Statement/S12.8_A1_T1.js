// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Appearing of break without an IterationStatement leads to syntax error
 *
 * @section: 12.8;
 * @path: 12_Statement/12.8_The_break_Statement/S12.8_A1_T1.js;
 * @description: Checking if break statement with no loop fails;
 * @negative;
 */

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
var x=1;
break;
var y=2;
//
//////////////////////////////////////////////////////////////////////////////

