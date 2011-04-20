// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S13_A2_T1;
* @section: 13;
* @assertion: function must be evaluated inside the expression;
* @description: Defining function body with "return arg";
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S13.0_A2_T1",

path: "13_Function_Definition\13.0_Chapter\S13.0_A2_T1.js",

assertion: "function must be evaluated inside the expression",

description: "Defining function body with \"return arg\"",

test: function testcase() {
   var x = (function __func(arg){return arg})(1);

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (x !== 1) {
	$ERROR('#1: x === 1. Actual: x ==='+x);
}

//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (typeof __func !== 'undefined') {
	$ERROR('#2: typeof __func === \'undefined\'. Actual: typeof __func ==='+typeof __func);
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

