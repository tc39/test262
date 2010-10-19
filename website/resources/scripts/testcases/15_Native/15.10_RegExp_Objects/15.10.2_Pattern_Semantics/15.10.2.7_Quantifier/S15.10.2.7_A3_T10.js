// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.10.2.7_A3_T10;
* @section: 15.10.2.7;
* @assertion: The production QuantifierPrefix :: + evaluates by returning the two results 1 and \infty;
* @description: Execute /o+/.test("abcdefg") and check results;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.10.2.7_A3_T10",

path: "15.10.2.7",

description: "Execute /o+/.test(\"abcdefg\") and check results",

test: function testcase() {
   __executed = /o+/.test("abcdefg");

//CHECK#1
if (__executed) {
	$ERROR('#1: /o+/.test("abcdefg") === false');
}


 }
});

