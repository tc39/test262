// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S12.6.4_A2;
* @section: 12.6.4;
* @assertion: "for(key in null)" Expression is allowed;
* @description: Checking if execution of "for(key in null)" passes;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S12.6.4_A2",

path: "12_Statement\12.6_Iteration_Statements\12.6.4_The_for_in_Statement\S12.6.4_A2.js",

assertion: "\"for(key in null)\" Expression is allowed",

description: "Checking if execution of \"for(key in null)\" passes",

test: function testcase() {
   //////////////////////////////////////////////////////////////////////////////
//CHECK#
try {
	for(__key in null){
	    var key=__key;
	};
} catch (e) {
	$ERROR('#1: "for(__key in null){}" does not lead to throwing exception');
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (key!==undefined) {
	$ERROR('#2: key === undefined. Actual: key ==='+key);
}
//
//////////////////////////////////////////////////////////////////////////////




 }
});

