// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.10.2.6_A3_T9;
* @section: 15.10.2.6;
* @assertion: The production Assertion :: \b evaluates by returning an internal AssertionTester closure that takes a State argument x and performs the ...;
* @description: Execute /r\b/.exec("pilot\nsoviet robot\topenoffice") and check results;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.10.2.6_A3_T9",

path: "15.10.2.6",

description: "Execute /r\\b/.exec(\"pilot\\nsoviet robot\\topenoffice\") and check results",

test: function testcase() {
   __executed = /r\b/.test("pilot\nsoviet robot\topenoffice");

//CHECK#1
if (__executed) {
	$ERROR('#1: /r\\b/.test("pilot\\nsoviet robot\\topenoffice") === false');
}


 }
});

