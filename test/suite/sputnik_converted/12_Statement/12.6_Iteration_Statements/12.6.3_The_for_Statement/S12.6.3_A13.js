// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S12.6.3_A13;
* @section: 12.6.3;
* @assertion: VariableDeclaration in "var VariableDeclarationListNoIn" of for IterationStatement is allowed;
* @description: Declaring variable in "for" ExpressionNoIn;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S12.6.3_A13",

path: "12_Statement\12.6_Iteration_Statements\12.6.3_The_for_Statement\S12.6.3_A13.js",

assertion: "VariableDeclaration in \"var VariableDeclarationListNoIn\" of for IterationStatement is allowed",

description: "Declaring variable in \"for\" ExpressionNoIn",

test: function testcase() {
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

 }
});

