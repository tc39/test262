// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S12.6.2_A3;
* @section: 12.6.2;
* @assertion: When "while" IterationStatement is evaluated, (normal, V, empty) is returned;
* @description: Using eval;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S12.6.2_A3",

path: "12_Statement\12.6_Iteration_Statements\12.6.2_The_while_statement\S12.6.2_A3.js",

assertion: "When \"while\" IterationStatement is evaluated, (normal, V, empty) is returned",

description: "Using eval",

test: function testcase() {
   var __in__do;

__evaluated = eval("while (false) __in__do=1;");

//////////////////////////////////////////////////////////////////////////////
//CHECK#
if (__in__do !== undefined) {
	$ERROR('#1: __in__do === undefined. Actual:  __in__do ==='+ __in__do  );
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (__evaluated !== undefined) {
	$ERROR('#2: __evaluated === undefined. Actual:  __evaluated ==='+ __evaluated  );
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

