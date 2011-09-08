// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Block "{}" in a "do-while" Expression is evaluated to true
 *
 * @section: 12.6.1;
 * @path: 12_Statement/12.6_Iteration_Statements/12.6.1_The_do_while_Statement/S12.6.1_A11.js;
 * @description: Checking if execution of "do {} while({})" passes;
 */

do {
    var __in__do=1;
    if(__in__do)break;
} while({});

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (__in__do !== 1) {
	$ERROR('#1: "{}" in do-while expression evaluates to true');
}
//
//////////////////////////////////////////////////////////////////////////////

