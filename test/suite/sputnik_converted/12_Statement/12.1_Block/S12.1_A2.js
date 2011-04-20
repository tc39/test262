// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S12.1_A2;
* @section: 12.1;
* @assertion: The production StatementList  Statement is evaluated as follows 
* 1. Evaluate Statement. 
* 2. If an exception was thrown, return (throw, V, empty) where V is the exception;
* @description: Throwing exception within a Block;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S12.1_A2",

path: "12_Statement\12.1_Block\S12.1_A2.js",

assertion: "The production StatementList  Statement is evaluated as follows",

description: "Throwing exception within a Block",

test: function testcase() {
   //////////////////////////////////////////////////////////////////////////////
//CHECK#1
try {
	x();
	$ERROR('#1: "x()" lead to throwing exception');
} catch (e) {
	$PRINT(e.message);
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
try {
    throw "catchme";	
    $ERROR('#2: throw "catchme" lead to throwing exception');
} catch (e) {
	if (e!=="catchme") {
		$ERROR('#2.1: Exception === "catchme". Actual:  Exception ==='+ e  );
	}
}

//
//////////////////////////////////////////////////////////////////////////////

 }
});

