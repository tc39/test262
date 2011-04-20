// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S12.2_A10;
* @section: 12.2;
* @assertion: "var" statement within "for" statement is allowed;
* @description: Declaring variable within a "for" IterationStatement;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S12.2_A10",

path: "12_Statement\12.2_Variable_Statement\S12.2_A10.js",

assertion: "\"var\" statement within \"for\" statement is allowed",

description: "Declaring variable within a \"for\" IterationStatement",

test: function testcase() {
   //////////////////////////////////////////////////////////////////////////////
//CHECK#1
try {
	__ind=__ind;
} catch (e) {
    $ERROR('#1: var inside "for" is admitted '+e.message);
}
//
//////////////////////////////////////////////////////////////////////////////

for (var __ind;;){
    break;
}

 }
});

