// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * "do-while" Statement is evaluated without syntax checks
 *
 * @section: 12.6.1;
 * @path: 12_Statement/12.6_Iteration_Statements/12.6.1_The_do_while_Statement/S12.6.1_A9.js;
 * @description: Throwing system exception whithin a "do-while" loop;
 */

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
try {
	do {
	    var x = 1; 
	    abaracadabara;
	} while(0);
	$ERROR('#1: "abbracadabra" lead to throwing exception');

} catch (e) {}

if (x !== 1) {
	$ERROR('#1.1: x === 1. Actual:  x ==='+ x  );
}
//
//////////////////////////////////////////////////////////////////////////////

