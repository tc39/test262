// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Block within a "while" Expression is not allowed
 *
 * @path 12_Statement/12.6_Iteration_Statements/12.6.2_The_while_statement/S12.6.2_A15.js
 * @description Expression is "{0}"
 * @negative
 */

//////////////////////////////////////////////////////////////////////////////
//CHECK#
while({1}){
   break ;
};
//
//////////////////////////////////////////////////////////////////////////////

