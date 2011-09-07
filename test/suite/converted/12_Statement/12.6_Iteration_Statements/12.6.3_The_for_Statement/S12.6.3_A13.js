// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * VariableDeclaration in "var VariableDeclarationListNoIn" of for IterationStatement is allowed
 *
 * @id: S12.6.3_A13;
 * @section: 12.6.3;
 * @description: Declaring variable in "for" ExpressionNoIn;
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

