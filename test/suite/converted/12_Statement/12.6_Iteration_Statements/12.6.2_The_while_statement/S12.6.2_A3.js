// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * When "while" IterationStatement is evaluated, (normal, V, empty) is returned
 *
 * @section: 12.6.2;
 * @path: 12_Statement/12.6_Iteration_Statements/12.6.2_The_while_statement/S12.6.2_A3.js;
 * @description: Using eval;
 */

var __in__do;

__evaluated = eval("while (false) __in__do=1;");

//////////////////////////////////////////////////////////////////////////////
//CHECK#
if (__in__do !== undefined) {
	$ERROR('#1: __in__do === undefined. Actual:  __in__do ==='+ __in__do  );
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (__evaluated !== undefined) {
	$ERROR('#2: __evaluated === undefined. Actual:  __evaluated ==='+ __evaluated  );
}
//
//////////////////////////////////////////////////////////////////////////////

