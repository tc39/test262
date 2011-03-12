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
id: "S14.0_A2",

path: "14.0",

description: "Declaring a function within an \"if\" Expression",

test: function testcase() {
   //////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (typeof f !== 'undefined') {
	$ERROR('#1: typeof f === \'undefined\'. Actual:  typeof f ==='+ typeof f  );
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (function f(arg){
	if (arg===0)
	   return 1;
	else
	   return f(arg-1)*arg;
}(3)!==6) {
	$ERROR('#2: FunctionDeclaration cannot be localed inside an Expression');
};
//
//////////////////////////////////////////////////////////////////////////////

 }
});

