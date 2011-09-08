// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * VariableDeclaration within Eval statement is initialized as the program reaches the eval statement
 *
 * @section: 12.2;
 * @path: 12_Statement/12.2_Variable_Statement/S12.2_A5.js;
 * @description: Executing eval("var x");
 */

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
try{
	x=x;
	$ERROR('#1: "x=x" lead to throwing exception');
}catch(e){
	$PRINT(e.message);
};
//
//////////////////////////////////////////////////////////////////////////////

eval("var x");

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
try{
	x=x;
}catch(e){
	$ERROR('#2: VariableDeclaration inside Eval statement is initialized when program reaches the eval statement '+e.message);
};
//
//////////////////////////////////////////////////////////////////////////////

