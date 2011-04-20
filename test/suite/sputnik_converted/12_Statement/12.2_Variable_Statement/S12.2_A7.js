// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S12.2_A7;
* @section: 12.2;
* @assertion: VariableDeclaration within "for" statement is allowed;
* @description: Declaring variable within "for" statement;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S12.2_A7",

path: "12_Statement\12.2_Variable_Statement\S12.2_A7.js",

assertion: "VariableDeclaration within \"for\" statement is allowed",

description: "Declaring variable within \"for\" statement",

test: function testcase() {
   //////////////////////////////////////////////////////////////////////////////
//CHECK#1
try{
	infor_var = infor_var;
}catch(e){
	$ERROR('#1: Variable declaration inside "for" loop is admitted');
};
//
//////////////////////////////////////////////////////////////////////////////

for (;;){
    break;
    var infor_var;
}

 }
});

