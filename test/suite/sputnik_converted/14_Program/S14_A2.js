// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S14_A2;
* @section: 14;
* @assertion: FunctionDeclaration cannot be localed inside an Expression;
* @description: Declaring a function within an "if" Expression;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S14_A2",

path: "14",

description: "Declaring a function within an \"if\" Expression",

test: function testcase() {
   //////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (typeof S14_A2_f !== 'undefined') {
    $ERROR('#1: typeof S14_A2_f === \'undefined\'. Actual:  typeof S14_A2_f ===' + typeof S14_A2_f);
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (function S14_A2_f(arg) {
	if (arg===0)
	   return 1;
	else
	    return S14_A2_f(arg - 1) * arg;
}(3)!==6) {
	$ERROR('#2: FunctionDeclaration cannot be localed inside an Expression');
};
//
//////////////////////////////////////////////////////////////////////////////

 }
});

