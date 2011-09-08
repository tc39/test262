// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Block within a "for-in" Expression is not allowed
 *
 * @section: 12.6.4;
 * @path: 12_Statement/12.6_Iteration_Statements/12.6.4_The_for_in_Statement/S12.6.4_A15.js;
 * @description: Using block within "for-in" Expression;
 * @negative;
 */

var __arr=[1,2,3];

//////////////////////////////////////////////////////////////////////////////
//CHECK#
for(x in {__arr}){
   break ;
};
//
//////////////////////////////////////////////////////////////////////////////

