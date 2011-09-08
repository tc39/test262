// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Expression in "while" IterationStatement is bracketed with braces
 *
 * @section: 12.6.2;
 * @path: 12_Statement/12.6_Iteration_Statements/12.6.2_The_while_statement/S12.6.2_A6_T1.js;
 * @description: Checking if execution of "while 1 break" fails;
 * @negative;
 */

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
while 1 break;
//
//////////////////////////////////////////////////////////////////////////////

