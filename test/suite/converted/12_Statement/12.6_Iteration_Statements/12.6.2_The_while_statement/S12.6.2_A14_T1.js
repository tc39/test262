// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * FunctionExpression within a "while" Expression is allowed
 *
 * @section: 12.6.2;
 * @path: 12_Statement/12.6_Iteration_Statements/12.6.2_The_while_statement/S12.6.2_A14_T1.js;
 * @description: Using "function __func(){return 0;}" as an Expression;
 */

//////////////////////////////////////////////////////////////////////////////
//CHECK#
while(function __func(){return 0;}){
   var __reached = 1;
   break;
};
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (__reached !== 1) {
	$ERROR('#2: function expression inside of while expression is allowed');
}
//
//////////////////////////////////////////////////////////////////////////////

