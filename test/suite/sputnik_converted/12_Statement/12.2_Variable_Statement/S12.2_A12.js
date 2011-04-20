// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S12.2_A12;
* @section: 12.2;
* @assertion: VariableDeclaration within "do-while" loop is allowed;
* @description: Declaring variable within "do-while" statement;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S12.2_A12",

path: "12_Statement\12.2_Variable_Statement\S12.2_A12.js",

assertion: "VariableDeclaration within \"do-while\" loop is allowed",

description: "Declaring variable within \"do-while\" statement",

test: function testcase() {
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

 }
});

