// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * VariableDeclaration within "do-while" loop is allowed
 *
 * @path 12_Statement/12.2_Variable_Statement/S12.2_A12.js
 * @description Declaring variable within "do-while" statement
 */

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
try {
	x=x;
} catch (e) {
	$ERROR('#1: Declaration variable inside "do-while" statement is admitted');
}
//
//////////////////////////////////////////////////////////////////////////////

do var x; while (false);

