// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S12.6.1_A14_T2;
* @section: 12.6.1;
* @assertion: FunctionExpression within a "do-while" Expression is allowed;
* @description: Using FunctionExpression "function __func(){return 0;}()" as an Expression;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S12.6.1_A14_T2",

path: "12_Statement\12.6_Iteration_Statements\12.6.1_The_do_while_Statement\S12.6.1_A14_T2.js",

assertion: "FunctionExpression within a \"do-while\" Expression is allowed",

description: "Using FunctionExpression \"function __func(){return 0;}()\" as an Expression",

test: function testcase() {
   //////////////////////////////////////////////////////////////////////////////
//CHECK#
do{
    var __reached = 1;
   break;
}while(function __func(){return 0;}());
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (__reached !== 1) {
	$ERROR('#2: function expession inside of do-while expression is allowed');
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

