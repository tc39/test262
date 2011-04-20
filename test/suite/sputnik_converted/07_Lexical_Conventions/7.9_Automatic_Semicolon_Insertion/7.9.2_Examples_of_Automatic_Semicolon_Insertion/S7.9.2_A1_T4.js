// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S7.9.2_A1_T4;
 * @section: 7.9.2;
 * @assertion: Check examples for automatic semicolon insertion from the Standart;
 * @description: return \n a+b is a valid sentence in the ECMAScript grammar
 *  with automatic semicolon insertion, but returned undefined;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S7.9.2_A1_T4",

path: "07_Lexical_Conventions\7.9_Automatic_Semicolon_Insertion\7.9.2_Examples_of_Automatic_Semicolon_Insertion\S7.9.2_A1_T4.js",

assertion: "Check examples for automatic semicolon insertion from the Standart",

description: "return \\n a+b is a valid sentence in the ECMAScript grammar",

test: function testcase() {
   //CHECK#1
var a=1,b=2;
function test(){
	return
	a+b
}
var x=test();
if (x!==undefined) $ERROR('#1: Automatic semicolon insertion not work with return');

 }
});

