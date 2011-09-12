// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * "{}" Block within a "while" Expression is evaluated to true
 *
 * @section 12.6.2
 * @path 12_Statement/12.6_Iteration_Statements/12.6.2_The_while_statement/S12.6.2_A11.js
 * @description Checking if execution of "while({}){}" passes
 */

while({}){
    var __in__do=1;
    if(__in__do)break;
};

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (__in__do !== 1) {
	$ERROR('#1: "{}" in while expression evaluates to true');
}
//
//////////////////////////////////////////////////////////////////////////////

