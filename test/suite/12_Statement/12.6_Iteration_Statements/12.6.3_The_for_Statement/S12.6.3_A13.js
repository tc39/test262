// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * VariableDeclaration in "var VariableDeclarationListNoIn" of for IterationStatement is allowed
 *
 * @path 12_Statement/12.6_Iteration_Statements/12.6.3_The_for_Statement/S12.6.3_A13.js
 * @description Declaring variable in "for" ExpressionNoIn
 */

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
try {
	index = index;
} catch (e) {
	$ERROR('#1: VariableDeclaration in "var VariableDeclarationListNoIn" of for IterationStatement is allowed');
}
//
//////////////////////////////////////////////////////////////////////////////


for(var index=0; index<6; index++) {
	;
}

