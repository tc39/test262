// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S12.6.1_A8;
* @section: 12.6.1;
* @assertion: "continue" statement within a "do-while" Statement is allowed;
* @description: Using eval;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S12.6.1_A8",

path: "12_Statement\12.6_Iteration_Statements\12.6.1_The_do_while_Statement\S12.6.1_A8.js",

assertion: "\"continue\" statement within a \"do-while\" Statement is allowed",

description: "Using eval",

test: function testcase() {
   var __condition = 0, __odds=0;

__evaluated = eval("do { __condition++; if (((''+__condition/2).split('.')).length>1) continue; __odds++;} while(__condition < 10)");

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (__odds !== 5) {
	$ERROR('#1: __odds === 5. Actual:  __odds ==='+ __odds  );
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (__evaluated !== 4) {
	$ERROR('#2: __evaluated === 4. Actual:  __evaluated ==='+ __evaluated  );
}
//
//////////////////////////////////////////////////////////////////////////////


 }
});

