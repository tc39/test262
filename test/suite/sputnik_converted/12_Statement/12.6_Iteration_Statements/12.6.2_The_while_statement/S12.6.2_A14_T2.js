// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S12.6.2_A14_T2;
* @section: 12.6.2;
* @assertion: FunctionExpression within a "while" Expression is allowed;
* @description: Using function call as an Expression;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S12.6.2_A14_T2",

path: "12_Statement\12.6_Iteration_Statements\12.6.2_The_while_statement\S12.6.2_A14_T2.js",

assertion: "FunctionExpression within a \"while\" Expression is allowed",

description: "Using function call as an Expression",

test: function testcase() {
   //////////////////////////////////////////////////////////////////////////////
//CHECK#
while(function __func(){return 1;}()){
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

 }
});

