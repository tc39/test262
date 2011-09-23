// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Any statement within "do-while" construction must be a compound
 *
 * @path 12_Statement/12.6_Iteration_Statements/12.6.1_The_do_while_Statement/S12.6.1_A12.js
 * @description Checking if execution of "do var x=1; var y =2; while (0)" fails
 * @negative
 */

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
do var x=1; var y =2; while (0);
//
//////////////////////////////////////////////////////////////////////////////

