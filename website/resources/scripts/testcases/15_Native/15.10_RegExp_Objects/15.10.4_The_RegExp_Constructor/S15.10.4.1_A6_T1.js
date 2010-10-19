// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.10.4.1_A6_T1;
* @section: 15.10.4.1;
* @assertion: The [[Class]] property of the newly constructed object is set to "RegExp";
* @description: Checking [[Class]] property of the newly constructed object;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.10.4.1_A6_T1",

path: "15.10.4.1",

description: "Checking [[Class]] property of the newly constructed object",

test: function testcase() {
   __re = new RegExp;
__re.toString = Object.prototype.toString;

//CHECK#1
if (__re.toString() !== "[object "+"RegExp"+"]") {
	$ERROR('#1: __re = new RegExp; __re.toString = Object.prototype.toString; __re.toString() === "[object "+"RegExp"+"]". Actual: ' + (__re.toString()));
}


 }
});

