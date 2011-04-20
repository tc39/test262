// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S12.6.1_A1;
* @section: 12.6.1;
* @assertion: When the production "do Statement while ( Expression )" is evaluated, Statement is evaluated first;
* @description: Evaluating various Expressions;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S12.6.1_A1",

path: "12_Statement\12.6_Iteration_Statements\12.6.1_The_do_while_Statement\S12.6.1_A1.js",

assertion: "When the production \"do Statement while ( Expression )\" is evaluated, Statement is evaluated first",

description: "Evaluating various Expressions",

test: function testcase() {
   do __in__do=1; while ( false );

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (__in__do!==1) {
	$ERROR('#1: false evaluates to false');
}
//
//////////////////////////////////////////////////////////////////////////////

do __in__do=2; while ( 0 );

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (__in__do!==2) {
	$ERROR('#2: 0 evaluates to false');
}
//
//////////////////////////////////////////////////////////////////////////////

do __in__do=3; while ( "" );

//////////////////////////////////////////////////////////////////////////////
//CHECK#3
if (__in__do!==3) {
	$ERROR('#3: "" evaluates to false');
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

