// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Block within a "do-while" Expression is not allowed
 *
 * @section: 12.6.1;
 * @path: 12_Statement/12.6_Iteration_Statements/12.6.1_The_do_while_Statement/S12.6.1_A15.js;
 * @description: Using "{0}" Block as an Expression;
 * @negative;
 */

//////////////////////////////////////////////////////////////////////////////
//CHECK#
do{
    ;
}while({0});
//
//////////////////////////////////////////////////////////////////////////////

