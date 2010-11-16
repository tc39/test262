// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.11.4.4_A1;
 * @section: 15.11.4.4, 16;
 * @assertion: The Error.prototype has toString property;
 * @description: Checking Error.prototype.toString;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.11.4.4_A1",

path: "15.11.4.4, 16",

description: "Checking Error.prototype.toString",

test: function testcase() {
   //////////////////////////////////////////////////////////////////////////////
// CHECK#1
if (!Error.prototype.hasOwnProperty('toString')) {
	$ERROR('#1: Error.prototype.hasOwnProperty(\'toString\') return true. Actual: '+Error.prototype.hasOwnProperty('toString'));
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

