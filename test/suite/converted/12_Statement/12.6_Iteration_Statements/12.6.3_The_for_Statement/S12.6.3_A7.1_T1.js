// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Only three expressions and two semicolons in "for(with var)" braces are allowed.
 * Appearing of for (ExpressionNoIn_opt ; Expression_opt ; Expression_opt; Expression_opt; Expression_opt;) statement leads to SyntaxError
 *
 * @section 12.6.3
 * @path 12_Statement/12.6_Iteration_Statements/12.6.3_The_for_Statement/S12.6.3_A7.1_T1.js
 * @description Checking if execution of "for(var index=0; index<10; index++; index--)" fails
 * @negative
 */

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
for(var index=0; index<10; index++; index--);
//
//////////////////////////////////////////////////////////////////////////////

