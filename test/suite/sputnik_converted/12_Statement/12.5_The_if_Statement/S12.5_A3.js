// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S12.5_A3;
* @section: 12.5;
* @assertion: When the production "IfStatement: if ( Expression ) Statement else Statement" is evaluated, Expression is evaluated first;
* @description: The Expression is "(function(){throw 1})()";
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S12.5_A3",

path: "12.5",

description: "The Expression is \"(function(){throw 1})()\"",

test: function testcase() {
   //////////////////////////////////////////////////////////////////////////////
//CHECK#1
try {
	if ((function(){throw 1})()) abracadabra
} catch (e) {
	if (e !== 1) {
		$ERROR('#1: Exception === 1. Actual:  Exception ==='+ e);
	}
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
try {
	if ((function(){throw 1})()) abracadabra; else blablachat;
} catch (e) {
	if (e !== 1) {
		$ERROR('#2: Exception === 1. Actual:  Exception ==='+ e);
	}
}
//
//////////////////////////////////////////////////////////////////////////////


 }
});

