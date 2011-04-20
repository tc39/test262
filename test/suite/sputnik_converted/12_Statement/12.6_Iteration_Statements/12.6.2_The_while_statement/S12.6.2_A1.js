// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S12.6.2_A1;
* @section: 12.6.2;
* @assertion: Expression from "while" IterationStatement is evaluated first; "false", "0", "null", "undefined" and "empty" strings used as the Expression are evaluated to "false";
* @description: Evaluating various Expressions;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S12.6.2_A1",

path: "12_Statement\12.6_Iteration_Statements\12.6.2_The_while_statement\S12.6.2_A1.js",

assertion: "Expression from \"while\" IterationStatement is evaluated first; \"false\", \"0\", \"null\", \"undefined\" and \"empty\" strings used as the Expression are evaluated to \"false\"",

description: "Evaluating various Expressions",

test: function testcase() {
   var __in__do;

while ( false ) __in__do=1;

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (__in__do !== undefined) {
	$ERROR('#1: false evaluates to false');
}
//
//////////////////////////////////////////////////////////////////////////////

while ( 0 ) __in__do=2;

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (__in__do !== undefined) {
	$ERROR('#2: 0 evaluates to false');
}
//
//////////////////////////////////////////////////////////////////////////////

while ( "" ) __in__do=3;

//////////////////////////////////////////////////////////////////////////////
//CHECK#3
if (__in__do !== undefined) {
	$ERROR('#3: empty string evaluates to false');
}
//
//////////////////////////////////////////////////////////////////////////////

while ( null ) __in__do=4;

//////////////////////////////////////////////////////////////////////////////
//CHECK#4
if (__in__do !== undefined) {
	$ERROR('#4: null evaluates to false');
}
//
//////////////////////////////////////////////////////////////////////////////

while ( undefined ) __in__do=35;

//////////////////////////////////////////////////////////////////////////////
//CHECK#5
if (__in__do !== undefined) {
	$ERROR('#5: undefined evaluates to false');
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

