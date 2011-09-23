// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * FunctionExpession within a "for-in" Expression is allowed
 *
 * @path 12_Statement/12.6_Iteration_Statements/12.6.4_The_for_in_Statement/S12.6.4_A14_T1.js
 * @description Using "function __func(){return 0;}" as Expession
 */

//////////////////////////////////////////////////////////////////////////////
//CHECK#
for(x in function __func(){return 0;}){
    if (x=="prototype") 
        var __reached = 1;
};
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (__reached !== 1) {
	$ERROR('#2: function expession inside of for-in expression is allowed');
}
//
//////////////////////////////////////////////////////////////////////////////

